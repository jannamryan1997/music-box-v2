import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import {  Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { IRecommendation, ISongVerify } from 'src/app/core/modules/recommendation';
import { IGenres, IGenresDetails } from 'src/app/core/modules/song';
import { RecommendationService } from '../../recommendation.service';

@Component({
    selector: 'app-song-verify',
    templateUrl: 'song-verify.modal.html',
    styleUrls: ['song-verify.modal.scss']
})

export class SongVerifyModalComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    public validateForm!: FormGroup;
    public generedDetail: IGenresDetails[] = [];
    public loading = false;
    public errorMessage!: string;
    @Input() item!: IRecommendation;
    constructor(private _recommendationService: RecommendationService, private _fb: FormBuilder, private _nzModalRef: NzModalRef) { }

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
        this._setPatchValue();
    }

    private _setPatchValue(): void {
        this.validateForm.patchValue({
            name: this.item.name,
            url: this.item.url,
        });
    }

    private _getGeneres(): void {
        this._recommendationService.getSongGenres()
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

    public songVerify(): void {
        this.loading = true;
        const { url, price, startSecond, endSecond, genered } = this.validateForm.value;
        const songVerifiDetails: ISongVerify = {
            songId: this.item.id,
            url,
            price,
            startSecond: Number(startSecond),
            endSecond: Number(endSecond),
            genreId: Number(genered.id)
        };
        this._recommendationService.songVerify(songVerifiDetails)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe((data) => {
                if (data) {
                    this._nzModalRef.destroy('accept');
                }

            });
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
