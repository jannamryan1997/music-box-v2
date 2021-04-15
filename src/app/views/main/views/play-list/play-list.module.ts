import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { PlayListRoutingModule } from './play-list-routing.module';
import { PlayListViewComponent } from './play-list.view';

@NgModule({
    declarations: [PlayListViewComponent],
    imports: [PlayListRoutingModule, SharedModule, CommonModule, ReactiveFormsModule, FormsModule],
    providers: [],
    entryComponents: []
})

export class PlayListModule { }
