import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongQueueViewComponent } from './song-queue.view';

const songQueueRoutes: Routes = [{ path: '', component: SongQueueViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(songQueueRoutes)],
    exports: []
})

export class SongQueueRoutingModule { }
