import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffersViewComponent } from './offers.view';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersService } from './offers.service';


@NgModule({
    declarations: [OffersViewComponent ],
    imports: [SharedModule, CommonModule, ReactiveFormsModule, FormsModule, OffersRoutingModule],
    providers: [OffersService],
    entryComponents: [ ]
})

export class OffersModule { }
