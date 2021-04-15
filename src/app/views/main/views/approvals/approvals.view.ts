import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-approvals',
    templateUrl: 'approvals.view.html',
    styleUrls: ['approvals.view.scss']
})

export class ApprovalsViewComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();

    ngOnInit(): void { }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
