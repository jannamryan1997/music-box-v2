import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { User } from '../modules/user';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user!: User;
    private _userState$: BehaviorSubject<User> = new BehaviorSubject<any>(null);

    constructor(
        private _httpClient: HttpClient,
    ) {}

    public fetchUser(): Observable<User> {
        return this._httpClient.get<User>('user/about');
    }

    public setUser(user: User): void {
        this._user = user;
        this._userState$.next(user);
    }

    public getUserSync(): User {
        return this._user;
    }
    public getUserInfo(role: string): Observable<User> {
        return this._httpClient.get<User>(`${role.toLowerCase()}/info`);
            // .pipe(
            //     map((data) => {
            //         this.setUser(data);
            //         return data;
            //     })
            // );
    }


    public getUser(): Observable<User> {
        return this._userState$.asObservable()
            .pipe(filter((v) => v !== null));
    }

}
