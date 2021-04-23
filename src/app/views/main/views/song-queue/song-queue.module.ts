import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { SongQueueRoutingModule } from './song-queue-routing.module';
import { SongQueueService } from './song-queue.service';
import { SongQueueViewComponent } from './song-queue.view';
import { YouTubePlayerModule } from '@angular/youtube-player';
@NgModule({
    declarations: [SongQueueViewComponent],
    imports: [
        SongQueueRoutingModule,
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        YouTubePlayerModule
    ],
    providers: [SongQueueService],
    entryComponents: []
})

export class SongQueueModule { }
