import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOffer } from 'src/app/core/modules/offers';
import { PaginatorResponse } from 'src/app/core/modules/paginator-response';

@Injectable()

export class OffersService {

    constructor(private _httpClient: HttpClient) { }

    public getOfferSongs(page: number, query: string): Observable<PaginatorResponse<IOffer[]>> {
        let params: HttpParams = new HttpParams();
        params = params.set('page', String(page));
        params = params.set('query', query);
        return this._httpClient.get<PaginatorResponse<IOffer[]>>('song/pendingsongs', { params });
    }
}
