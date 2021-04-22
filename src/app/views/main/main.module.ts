import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainViewComponent } from './main.view';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSiderComponent } from './components';

@NgModule({
    declarations: [MainViewComponent, NzSiderComponent],
    imports: [
        MainRoutingModule,
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NzLayoutModule,
        NzBreadCrumbModule,
    ],
    providers: [],
    entryComponents: []
})

export class MainModule { }
