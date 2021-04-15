import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-transaction-log',
    templateUrl: 'transaction-log.view.html',
    styleUrls: ['transaction-log.view.scss']
})

export class TransactionLogViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    constructor() { }

    ngOnInit(): void { }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
