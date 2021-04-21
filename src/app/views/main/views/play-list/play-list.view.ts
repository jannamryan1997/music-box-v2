import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { ConfirmDeleteModalComponent } from 'src/app/core/madals';

@Component({
    selector: 'app-play-list',
    templateUrl: 'play-list.view.html',
    styleUrls: ['play-list.view.scss']
})

export class PlayListViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();

    constructor(private _modalService: NzModalService) { }

    ngOnInit(): void { }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

    public onClickConfirmDelete(): void {
        this._modalService.create({
            nzTitle: ' ',
            nzContent: ConfirmDeleteModalComponent,
            nzFooter: 'false',
        });
    }
}
