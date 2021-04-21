import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { MENU_ITEM } from 'src/app/core/global/menu-items';
import { LoginModalComponent } from 'src/app/core/madals';
import { IMenuItem } from 'src/app/core/modules/menu-item';

@Component({
    selector: 'app-main',
    templateUrl: 'main.view.html',
    styleUrls: ['main.view.scss']
})

export class MainViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    public isCollapsed = false;
    public isCollapsedMobile = false;
    public menuItem: IMenuItem[] = MENU_ITEM;
    constructor(private _modalService: NzModalService) {
        // this._modalService.create({
        //     nzTitle: ' ',
        //     nzContent: LoginModalComponent,
        //     nzFooter: 'false',
        // });
    }

    ngOnInit(): void { 
        
    }

    ngOnDestroy(): void { }
}
