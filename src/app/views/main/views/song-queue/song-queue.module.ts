import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { SongQueueRoutingModule } from './song-queue-routing.module';
import { SongQueueViewComponent } from './song-queue.view';

@NgModule({
    declarations: [SongQueueViewComponent],
    imports: [SongQueueRoutingModule, SharedModule, CommonModule, ReactiveFormsModule, FormsModule],
    providers: [],
    entryComponents: []
})

export class SongQueueModule { }
