import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { IRecommendation } from 'src/app/core/modules/recommendation';
import { PaginatorResponse } from 'src/app/core/modules/paginator-response';
import { RecommendationService } from './recommendation.service';
import { SongVerifyModalComponent } from './modals';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-recommendation',
    templateUrl: 'recommendation.view.html',
    styleUrls: ['recommendation.view.scss']
})

export class RecommendationViewComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    public loading = false;
    public searchControl: FormControl = new FormControl('');
    public countOffers!: number;
    public recommendationDetails: IRecommendation[] = [];
    public page = 1;


    constructor(
        private _recommendationService: RecommendationService,
        private _modalService: NzModalService,
        private message: NzMessageService
    ) { }

    ngOnInit(): void {
        this.searchControl.valueChanges.subscribe((data) => {
            if (data.length >= 3) {
                this._getRecommendation(false);
            }
            else {
                this._getRecommendation();
            }
        });
        this._getRecommendation();
    }
    private _getRecommendation(isShowLoading = true): void {
        if (isShowLoading) {
            this.loading = true;
        }
        const searchValue: string = this.searchControl.value;
        const page: number = this.page;
        this._recommendationService.getRecommendation(page, searchValue)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe((data: PaginatorResponse<IRecommendation[]>) => {
                this.countOffers = data.count;
                this.recommendationDetails = data.data;
                console.log(   this.recommendationDetails);
                
            });
    }

    public onClickOpenSongVerify(item: IRecommendation): void {
        const dialogRef = this._modalService.create({
            nzTitle: 'Song Verify',
            nzContent: SongVerifyModalComponent,
            nzFooter: 'false',
            nzComponentParams: { item }
        });
        dialogRef.afterClose.subscribe((data) => {
            if (data && data === 'accept') {
                this._getRecommendation();
            }
        });
    }

    public songDecline(songId: IRecommendation): void {
        this.loading = true;
        this._recommendationService.songDecline(songId.id)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                }))
            .subscribe((data) => {
                console.log(data);
                this._getRecommendation();
                const type = 'success';
                this.message.create(type, `This is a message of ${type}`);
            },
                err => {
                    const types = 'error';
                    this.message.create(types, `This is a message of ${types}`);
                }
            );
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

}
