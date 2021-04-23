import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayListItem } from 'src/app/core/modules/play-list';

@Injectable()

export class SongQueueService {

    constructor(private _httpClient: HttpClient) { }

    public getPlayList(restaurantId: number): Observable<PlayListItem[]> {
        return this._httpClient.get<PlayListItem[]>(`song/playlist/${restaurantId}`);
    }

    public getCurrentSong(): Observable<PlayListItem> {
        return this._httpClient.get<PlayListItem>('song/current-song');
    }

    public getNextSong(songOrderId: number): Observable<PlayListItem> {
        return this._httpClient.get<PlayListItem>(`song/next-song/${songOrderId}`);
    }
}
