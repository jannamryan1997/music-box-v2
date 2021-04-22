import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './home.view';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LoginModalComponent } from 'src/app/core/madals';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { HomeService } from './home.service';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
    declarations: [HomeViewComponent, LoginModalComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HomeRoutingModule,
        NzLayoutModule,
        NzCarouselModule,
        SharedModule,
        SlickCarouselModule
    ],
    providers: [HomeService],
    entryComponents: [LoginModalComponent]
})

export class HomeModule { }
