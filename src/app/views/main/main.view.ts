import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { LoginModalComponent } from 'src/app/core/madals';

@Component({
    selector: 'app-main',
    templateUrl: 'main.view.html',
    styleUrls: ['main.view.scss']
})

export class MainViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    public isCollapsed = false;
    public isCollapsedMobile = false;
    constructor(private _modalService: NzModalService) {
        // this._modalService.create({
        //     nzTitle: ' ',
        //     nzContent: LoginModalComponent,
        //     nzFooter: 'false',
        // });
    }

    ngOnInit(): void { }

    ngOnDestroy(): void { }
}
