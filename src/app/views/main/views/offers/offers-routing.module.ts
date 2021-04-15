import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersViewComponent } from './offers.view';

const offersRoutes: Routes = [{ path: '', component: OffersViewComponent }];
@NgModule({
    imports: [RouterModule.forChild(offersRoutes)],
    exports: [RouterModule]
})

export class OffersRoutingModule { }
