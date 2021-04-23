import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { RecommendationRoutingModule } from './recommendation-routing.module';
import { RecommendationService } from './recommendation.service';
import { RecommendationViewComponent } from './recommendation.view';
import { DropdownModule } from 'primeng/dropdown';
import { SongVerifyModalComponent } from './modals';
import { NzMessageModule } from 'ng-zorro-antd/message';
@NgModule({
    declarations: [RecommendationViewComponent, SongVerifyModalComponent],
    imports: [
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RecommendationRoutingModule,
        DropdownModule,
        NzMessageModule
    ],
    providers: [RecommendationService],
    entryComponents: [SongVerifyModalComponent]
})

export class RecommendationModule { }
