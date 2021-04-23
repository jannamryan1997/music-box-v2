import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecommendationViewComponent } from './recommendation.view';

const RecommendationRoutes: Routes = [{ path: '', component: RecommendationViewComponent }];
@NgModule({
    imports: [RouterModule.forChild(RecommendationRoutes)],
    exports: [RouterModule]
})

export class RecommendationRoutingModule { }
