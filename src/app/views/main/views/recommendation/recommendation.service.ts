import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecommendation, ISongVerify } from 'src/app/core/modules/recommendation';
import { PaginatorResponse } from 'src/app/core/modules/paginator-response';
import { IGenres } from 'src/app/core/modules/song';
import { EmptyResponse } from 'src/app/core/modules/authorization';

@Injectable()

export class RecommendationService {

    constructor(private _httpClient: HttpClient) { }

    public getRecommendation(page: number, query: string): Observable<PaginatorResponse<IRecommendation[]>> {
        let params: HttpParams = new HttpParams();
        params = params.set('page', String(page));
        params = params.set('query', query);
        return this._httpClient.get<PaginatorResponse<IRecommendation[]>>('song/pendingsongs', { params });
    }
    public getSongGenres(): Observable<IGenres> {
        return this._httpClient.get<IGenres>('song/genres');
    }
    public songVerify(body: ISongVerify): Observable<EmptyResponse> {
        return this._httpClient.post<EmptyResponse>('song/verify', body);
    }
    public songDecline(songId: number): Observable<EmptyResponse> {
        return this._httpClient.delete(`song/${songId}`);
    }
}
