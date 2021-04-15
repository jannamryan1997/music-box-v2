import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-offers',
    templateUrl: 'offers.view.html',
    styleUrls: ['offers.view.scss']
})

export class OffersViewComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();

    constructor() { }

    ngOnInit(): void { }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

}
