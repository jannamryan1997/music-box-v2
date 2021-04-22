import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDeleteModalComponent } from '../madals';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AppLoadingComponent, MatSpinnerComponent } from '../components';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    declarations: [ConfirmDeleteModalComponent, AppLoadingComponent, MatSpinnerComponent],
    imports: [FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NzIconModule,
        NzInputModule,
        NzButtonModule,
        NzTableModule,
        NzCardModule,
        NzFormModule,
        NzModalModule,
        NzSpinModule,
        MatPaginatorModule
    ],
    exports: [ConfirmDeleteModalComponent,
        AppLoadingComponent,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NzIconModule,
        NzInputModule,
        NzButtonModule,
        NzTableModule,
        NzCardModule,
        NzFormModule,
        NzModalModule,
        NzSpinModule,
        MatPaginatorModule,
        MatSpinnerComponent
    ],
    providers: [],
    entryComponents: [ConfirmDeleteModalComponent]
})

export class SharedModule { }
