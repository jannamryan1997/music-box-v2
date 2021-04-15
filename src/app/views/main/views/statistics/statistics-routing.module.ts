import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsViewComponent } from './statistics.view';

const statisticsRoutes: Routes = [{ path: '', component: StatisticsViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(statisticsRoutes)],
    exports: [RouterModule]
})

export class StatisticsRoutingModule { }
