import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalsViewComponent } from './approvals.view';

const approvalsRoutes: Routes = [{ path: '', component: ApprovalsViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(approvalsRoutes)],
    exports: [RouterModule]
})

export class ApprovalsRoutingModule { }
