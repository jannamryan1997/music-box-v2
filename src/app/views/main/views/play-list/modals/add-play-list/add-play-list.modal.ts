import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { IGenres, IGenresDetails, ISongDetails } from 'src/app/core/modules/song';
import { User } from 'src/app/core/modules/user';
import { UserService } from 'src/app/core/services/user.service';
import { PlayListService } from '../../play-list.service';

@Component({
    selector: 'app-add-play-list',
    templateUrl: 'add-play-list.modal.html',
    styleUrls: ['add-play-list.modal.scss']
})

export class AddPlayListModalComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    private _restaurantId!: number | any;
    public validateForm!: FormGroup;
    public loading = false;
    public errorMessage!: string;
    public generedDetail: IGenresDetails[] = [];
    public role!: string;

    constructor(
        private _fb: FormBuilder,
        private _playListService: PlayListService,
        private _NzModalRef: NzModalRef,
        private _userService: UserService,
        private _cookieService: CookieService,

    ) {
        this.role = this._cookieService.get('role');
        this._userService.getUserInfo(this.role)
            .subscribe((data: User) => {
                this._restaurantId = data.id;
                console.log(data);
            });
    }

    ngOnInit(): void {
        this._initForm();
        this._getGeneres();
    }

    private _initForm(): void {
        this.validateForm = this._fb.group({
            name: ['', Validators.required],
            price: ['', Validators.required],
            url: ['', Validators.required],
            startSecond: ['', Validators.required],
            endSecond: ['', Validators.required],
            genered: ['', Validators.required],
        });
    }

    private _getGeneres(): void {
        this._playListService.getSongGenres()
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => { })
            )
            .subscribe((data: IGenres) => {
                this.generedDetail = data.genres;

            });
    }

    public submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    public addSongs(): void {
        this.loading = true;
        const { name, url } = this.validateForm.value;
        const sondData: ISongDetails = {
            name,
            url,
            price: Number(this.validateForm.value.price),
            startSecond: Number(this.validateForm.value.startSecond),
            endSecond: Number(this.validateForm.value.endSecond),
            genreId: Number(this.validateForm.value.genered.id),
            restaurantId: this._restaurantId
        };
        this._playListService.addSong(sondData)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe((data) => {
                this._NzModalRef.close('Add Song');

            },
                err => {
                    this.errorMessage = err.message;
                }
            );
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
