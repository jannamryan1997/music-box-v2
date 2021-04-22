import { Component, OnDestroy, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { MENU_ITEM } from 'src/app/core/global/menu-items';
import { IMenuItem } from 'src/app/core/modules/menu-item';
import { EUserRole } from 'src/app/core/modules/user';
import { UserService } from 'src/app/core/services/user.service';

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
    public role!: EUserRole;
    constructor(private _cookieService: CookieService, private _userService: UserService) {
        this.role = this._userService.getUserSync()?.role;
        this.menuItem = this.menuItem.filter((v) => v.roles.includes(this.role));
        this._cookieService.set('role', this.role);
    }

    ngOnInit(): void { }

    public logOut(item: IMenuItem): boolean {
        if (item.label === 'Log out') {
            this._cookieService.delete('refreshToken');
            this._cookieService.delete('accessToken');
            this._cookieService.delete('role');
            return true;
        }
        else {
            return false;
        }
    }

    ngOnDestroy(): void { }
}
