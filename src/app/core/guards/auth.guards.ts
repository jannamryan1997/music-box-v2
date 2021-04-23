
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../modules/user';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private _userService: UserService,
        private _router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._userService.fetchUser()
            .pipe(
                map((data: User) => {
                    this._userService.setUser(data);
                    // if (data.role === 'SuperAdmin') {
                    //     // this._router.navigate(['/approvals']);
                    // }
                    // else if(data.role === 'Restaurant'){
                    //     // this._router.navigate(['/offers']);
                    // }
                    return true;
                }),
                catchError(() => {
                    this._router.navigate(['/home']);
                    return throwError(false);
                })
            );
    }
}
