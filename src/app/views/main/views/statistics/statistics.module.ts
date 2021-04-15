import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsViewComponent } from './statistics.view';

@NgModule({
    declarations: [StatisticsViewComponent],
    imports: [
        StatisticsRoutingModule,
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [],
    entryComponents: []
})
export class StatisticsModule { }
