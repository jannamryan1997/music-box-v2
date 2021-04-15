import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayListViewComponent } from './play-list.view';

const playListRoutes: Routes = [{ path: '', component: PlayListViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(playListRoutes)],
    exports: [RouterModule]
})

export class PlayListRoutingModule { }

