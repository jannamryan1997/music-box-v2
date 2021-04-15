import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { ApprovalsRoutingModule } from './approvals-routing.module';
import { ApprovalsViewComponent } from './approvals.view';

@NgModule({
    declarations: [ApprovalsViewComponent],
    imports: [SharedModule, CommonModule, ReactiveFormsModule, FormsModule, ApprovalsRoutingModule],
    providers: [],
    entryComponents: []
})

export class ApprovalsModule { }
