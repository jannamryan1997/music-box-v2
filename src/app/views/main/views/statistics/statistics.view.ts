import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-statistics',
    templateUrl: 'statistics.view.html',
    styleUrls: ['statistics.view.scss']
})

export class StatisticsViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    constructor() { }

    ngOnInit(): void {
        console.log('barevr43');
        console.log('jdfdsfsdf');
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

}
