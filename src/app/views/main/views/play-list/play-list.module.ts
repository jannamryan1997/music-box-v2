import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { AddPlayListModalComponent, ShowVideoModalComponent } from './modals';
import { PlayListRoutingModule } from './play-list-routing.module';
import { PlayListService } from './play-list.service';
import { PlayListViewComponent } from './play-list.view';
import {DropdownModule} from 'primeng/dropdown';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
    declarations: [PlayListViewComponent, AddPlayListModalComponent, ShowVideoModalComponent],
    imports: [
        PlayListRoutingModule,
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        DropdownModule,
        YouTubePlayerModule
    ],
    providers: [PlayListService],
    entryComponents: [AddPlayListModalComponent, ShowVideoModalComponent]
})

export class PlayListModule { }
