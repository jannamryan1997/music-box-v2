import { NgModule } from '@angular/core';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundViewComponent } from './not-found.view';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@NgModule({
    declarations: [NotFoundViewComponent],
    imports: [NotFoundRoutingModule, NzButtonModule, NzResultModule],
    providers: [],
    entryComponents: []
})

export class NotFoundModule { }
