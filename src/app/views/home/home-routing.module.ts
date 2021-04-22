import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home.view';

const homeRouters: Routes = [{ path: '', component: HomeViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(homeRouters)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }
