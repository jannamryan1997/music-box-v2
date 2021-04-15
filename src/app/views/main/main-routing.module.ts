import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main.view';

const mainRoutes: Routes = [{
    path: '', component: MainViewComponent, children: [
        { path: '', pathMatch: 'full', redirectTo: 'transaction-log' },
        {
            path: 'transaction-log',
            loadChildren: () => import('./views/transaction-log/transaction-log.module').then(m => m.TransactionLogModule)
        },
        {
            path: 'approvals',
            loadChildren: () => import('./views/approvals/approvals.module').then(m => m.ApprovalsModule)
        },
        {
            path: 'offers',
            loadChildren: () => import('./views/offers/offers.module').then(m => m.OffersModule)
        },
        {
            path: 'playlist',
            loadChildren: () => import('./views/play-list/play-list.module').then(m => m.PlayListModule)
        },
        {
            path: 'songQueue',
            loadChildren: () => import('./views/song-queue/song-queue.module').then(m => m.SongQueueModule)
        },
        {
            path: 'statistics',
            loadChildren: () => import('./views/statistics/statistics.module').then(m => m.StatisticsModule)
        }
    ]

}];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }
