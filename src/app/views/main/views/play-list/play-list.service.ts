import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginatorResponse } from 'src/app/core/modules/paginator-response';
import { Observable } from 'rxjs';
import { EmptyResponse } from 'src/app/core/modules/authorization';
import { IGenres, ISongDetails, ISongs } from 'src/app/core/modules/song';

@Injectable()

export class PlayListService {
    constructor(private _httpClient: HttpClient) { }

    public getSongs(page: number, query: string): Observable<PaginatorResponse<ISongs[]>> {
        let params: HttpParams = new HttpParams();
        params = params.set('page', String(page));
        params = params.set('query', query);
        return this._httpClient.get<PaginatorResponse<ISongs[]>>('song/', { params });
    }

    public deleteSongItem(id: number): Observable<EmptyResponse> {
        return this._httpClient.delete<EmptyResponse>(`song/${id}`);
    }
    public addSong(data: ISongDetails): Observable<any> {
        return this._httpClient.post('song/add', data);
    }

    public getSongGenres(): Observable<IGenres> {
        return this._httpClient.get<IGenres>('song/genres');
    }


}

