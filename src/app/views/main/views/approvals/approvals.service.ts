import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmptyResponse } from 'src/app/core/modules/authorization';
import { PaginatorResponse } from 'src/app/core/modules/paginator-response';
import { IResataurants } from 'src/app/core/modules/restaurant';

@Injectable()

export class ApprovalsService {

    constructor(private _httpClient: HttpClient) { }

    public getRestaurant(page: number, query: string): Observable<PaginatorResponse<IResataurants[]>> {
        let params: HttpParams = new HttpParams();
        params = params.set('page', String(page));
        params = params.set('query', query);
        return this._httpClient.get<PaginatorResponse<IResataurants[]>>('restaurant/', { params });
    }

    public resrtaratCreate(restaurantId: number, isVerified: boolean): Observable<EmptyResponse> {
        return this._httpClient.post<EmptyResponse>(`restaurant/verify/${restaurantId}`, { isVerified });
    }
    public deleteRestaurant(id: number): Observable<any> {
        return this._httpClient.delete(`restaurant/${id}`);
    }
}
