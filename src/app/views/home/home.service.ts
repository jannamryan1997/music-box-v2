import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ILogin } from 'src/app/core/modules/login';
import { Observable } from 'rxjs';
import { IAuthorization } from 'src/app/core/modules/authorization';

@Injectable()

export class HomeService {

constructor(private _httpClient: HttpClient) { }

public login(body: ILogin): Observable<IAuthorization> {
    let params = new HttpParams();
    params = params.set('authorization', 'false');
    return this._httpClient.post<IAuthorization>('admin/login', body);
}
}
