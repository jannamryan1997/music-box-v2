import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { LoginModalComponent } from 'src/app/core/madals';

@Component({
    selector: 'app-home',
    templateUrl: 'home.view.html',
    styleUrls: ['home.view.scss']
})

export class HomeViewComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    slides = [
        { img: 'assets/image/music_1.png' },
        { img: 'assets/image/music_2.png' },
        { img: 'assets/image/music_3.png' },
        { img: 'assets/image/music_2.png' }
    ];
    slideConfig = {};
    constructor(private _modalService: NzModalService) {
        this.slideConfig = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000
          };
    }

    ngOnInit(): void {

    }

    public onClickOpenLoginModal(): void {
        this._modalService.create({
            nzTitle: ' ',
            nzContent: LoginModalComponent,
            nzFooter: 'false',
        });
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
