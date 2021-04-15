import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { TransactionLogRoutingModule } from './transaction-log-routing.module';
import { TransactionLogViewComponent } from './transaction-log.view';

@NgModule({
    declarations: [TransactionLogViewComponent],
    imports: [
        SharedModule,
        TransactionLogRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [],
    entryComponents: []
})

export class TransactionLogModule { }
 