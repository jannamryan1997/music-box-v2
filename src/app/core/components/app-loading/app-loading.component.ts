import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-loading',
    templateUrl: 'app-loading.component.html',
    styleUrls: ['app-loading.component.scss']
})

export class AppLoadingComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    constructor() { }

    ngOnInit(): void { }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
