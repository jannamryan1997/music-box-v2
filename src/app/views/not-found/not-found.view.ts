import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-not-found',
    templateUrl: 'not-found.view.html',
    styleUrls: ['not-found.view.scss']
})

export class NotFoundViewComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    constructor(private _router:Router,private _cookieService:CookieService) { }

    ngOnInit(): void { }

public onClickBack():void{
this._router.navigate(['/home']);
this._cookieService.deleteAll();

}
    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
