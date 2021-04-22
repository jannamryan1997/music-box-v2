import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { ApprovalsRoutingModule } from './approvals-routing.module';
import { ApprovalsService } from './approvals.service';
import { ApprovalsViewComponent } from './approvals.view';
import { CreateApprovalsModuleComponent } from './modals';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
    declarations: [ApprovalsViewComponent, CreateApprovalsModuleComponent],
    imports: [
        SharedModule,
         CommonModule,
         ReactiveFormsModule,
         FormsModule,
         ApprovalsRoutingModule,
         NzCheckboxModule
        ],
    providers: [ApprovalsService],
    entryComponents: [CreateApprovalsModuleComponent]
})

export class ApprovalsModule { }
