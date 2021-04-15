import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainViewComponent } from './main.view';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSiderComponent } from './components';
import { LoginModalComponent } from 'src/app/core/madals';
@NgModule({
    declarations: [MainViewComponent, NzSiderComponent,LoginModalComponent],
    imports: [
        MainRoutingModule,
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NzLayoutModule,
        NzBreadCrumbModule,
        NzInputModule
    ],
    providers: [],
    entryComponents: [LoginModalComponent]
})

export class MainModule { }
