import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { EUserRole } from 'src/app/core/modules/user';
import { MainViewComponent } from './main.view';

const mainRoutes: Routes = [{
    path: '', component: MainViewComponent, children: [
        { path: '', pathMatch: 'full', redirectTo: 'transaction-log' },
        {
            path: 'transaction-log',
            loadChildren: () => import('./views/transaction-log/transaction-log.module').then(m => m.TransactionLogModule),
            data: {
                enabledRoles: [EUserRole.SuperAdmin]
            },
            canActivate: [RoleGuard]
        },
        {
            path: 'approvals',
            loadChildren: () => import('./views/approvals/approvals.module').then(m => m.ApprovalsModule),
            data: {
                enabledRoles: [EUserRole.SuperAdmin]
            },
            canActivate: [RoleGuard]
        },
        {
            path: 'offers',
            loadChildren: () => import('./views/offers/offers.module').then(m => m.OffersModule),
            data: {
                enabledRoles: [EUserRole.Restaurant]
            },
            canActivate: [RoleGuard]
        },
        {
            path: 'playlist',
            loadChildren: () => import('./views/play-list/play-list.module').then(m => m.PlayListModule),
            data: {
                enabledRoles: [EUserRole.SuperAdmin, EUserRole.Restaurant]
            },
            canActivate: [RoleGuard]
        },
        {
            path: 'songQueue',
            loadChildren: () => import('./views/song-queue/song-queue.module').then(m => m.SongQueueModule),
            data: {
                enabledRoles: [EUserRole.Restaurant]
            },
            canActivate: [RoleGuard]
        },
        {
            path: 'statistics',
            loadChildren: () => import('./views/statistics/statistics.module').then(m => m.StatisticsModule),
            data: {
                enabledRoles: [EUserRole.SuperAdmin, EUserRole.Restaurant]
            },
            canActivate: [RoleGuard]
        }
    ]

}];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }
