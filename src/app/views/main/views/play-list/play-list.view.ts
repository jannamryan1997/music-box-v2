import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { ConfirmDeleteModalComponent } from 'src/app/core/madals';
import { PaginatorResponse } from 'src/app/core/modules/paginator-response';
import { ISongs } from 'src/app/core/modules/song';
import { AddPlayListModalComponent, ShowVideoModalComponent } from './modals';
import { PlayListService } from './play-list.service';

@Component({
    selector: 'app-play-list',
    templateUrl: 'play-list.view.html',
    styleUrls: ['play-list.view.scss']
})

export class PlayListViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    public loading = false;
    public page = 1;
    public errorMessage!: string;
    public searchControl: FormControl = new FormControl('');
    public songsDetails: ISongs[] = [];
    public countSong!: number;
    public role!: string;

    constructor(
        private _modalService: NzModalService,
        private _cookieService: CookieService,
        private _playListService: PlayListService
    ) {
        if (this._cookieService.get('role')) {
            this.role = this._cookieService.get('role');
        }
    }

    ngOnInit(): void {
        this.searchControl.valueChanges.subscribe((data) => {
            if (data.length >= 3) {
                this._getSongs(false);
            }
            else {
                this._getSongs();
            }
        });
        this._getSongs();
    }

    private _getSongs(isShowLoading = true): void {
        if (isShowLoading) {
            this.loading = true;
        }
        const searchValue: string = this.searchControl.value;
        const page: number = this.page;
        this._playListService.getSongs(page, searchValue)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe((data: PaginatorResponse<ISongs[]>) => {
                this.countSong = data.count;
                this.songsDetails = data.data;
            });

    }

    private _deleteSongItem(id: number): void {
        this._playListService.deleteSongItem(id)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe((data) => {
                this._getSongs();
            });
    }

    public onClickDeleteItem(item: ISongs): void {
        const dialogRef = this._modalService.create({
            nzTitle: 'Confirm Delete',
            nzContent: ConfirmDeleteModalComponent,
            nzFooter: 'false'
        });
        dialogRef.afterClose.subscribe((data: string) => {
            if (data && data === 'confirm-delete') {
                this._deleteSongItem(item.id);
            }
        });
    }

    public onClickOpenViewVideoModal(item: ISongs): void {
        const dialogRef = this._modalService.create({
            nzTitle: 'View Video',
            nzContent: ShowVideoModalComponent,
            nzFooter: 'false',
            nzComponentParams: {item}
        });
    }
    public onClickAddSongModal(): void {
        const dialogRef = this._modalService.create({
            nzTitle: 'Add Song',
            nzContent: AddPlayListModalComponent,
            nzFooter: 'false',
        });
        dialogRef.afterClose.subscribe((data: string) => {
            if (data === 'Add Song') {
                this._getSongs();
            }
        });
    }

    public paginate($event: PageEvent): void {
        this.page = $event.pageIndex + 1;
        this._getSongs();
    }
    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
