import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionLogViewComponent } from './transaction-log.view';

const transactionLogRoutes: Routes = [{ path: '', component: TransactionLogViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(transactionLogRoutes)],
    exports: [RouterModule]
})

export class TransactionLogRoutingModule { }
