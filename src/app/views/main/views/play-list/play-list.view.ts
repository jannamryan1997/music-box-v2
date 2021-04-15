import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-play-list',
    templateUrl: 'play-list.view.html',
    styleUrls: ['play-list.view.scss']
})

export class PlayListViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    constructor() { }

    ngOnInit(): void { }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

}
