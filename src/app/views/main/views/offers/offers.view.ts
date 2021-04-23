import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { IOffer } from 'src/app/core/modules/offers';
import { PaginatorResponse } from 'src/app/core/modules/paginator-response';
import { OffersService } from './offers.service';

@Component({
    selector: 'app-offers',
    templateUrl: 'offers.view.html',
    styleUrls: ['offers.view.scss']
})

export class OffersViewComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    public loading = false;
    public searchControl: FormControl = new FormControl('');
    public countOffers!: number;
    public offersDetails: IOffer[] = [];
    public page = 1;


    constructor(private _offersService: OffersService,private _modalService: NzModalService) { }

    ngOnInit(): void {
        this.searchControl.valueChanges.subscribe((data) => {
            if (data.length >= 3) {
                this._getOffers(false);
            }
            else {
                this._getOffers();
            }
        });
        this._getOffers();
    }
    private _getOffers(isShowLoading = true): void {
        if (isShowLoading) {
            this.loading = true;
        }
        const searchValue: string = this.searchControl.value;
        const page: number = this.page;
        this._offersService.getOfferSongs(page, searchValue)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe((data: PaginatorResponse<IOffer[]>) => {
                this.countOffers = data.count;
                this.offersDetails = data.data;
            });
        }

        ngOnDestroy(): void {
            this._unsubscribe$.next();
            this._unsubscribe$.complete();
        }

    }
