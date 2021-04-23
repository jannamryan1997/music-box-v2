import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { HomeService } from 'src/app/views/home/home.service';
import { IAuthorization } from '../../modules/authorization';
import { ILogin } from '../../modules/login';

@Component({
    selector: 'app-login',
    templateUrl: 'login.modal.html',
    styleUrls: ['login.modal.scss']
})

export class LoginModalComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    public validateForm!: FormGroup;
    public errorMessage!: string;
    public loading = false;
    constructor(
        private _fb: FormBuilder,
        private _cookieService: CookieService,
        private _homeService: HomeService,
        private _router: Router,
        private _nzModal: NzModalRef,
    ) { }

    ngOnInit(): void {
        this._initForm();
    }

    private _initForm(): void {
        this.validateForm = this._fb.group({
            userName: ['hayat@mail.ru', [Validators.required, Validators.email]],
            password: ['Qwerty12345=', [Validators.required]],
        });
    }

    public submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }


    public onClickLogin(): void {
        if (this.validateForm.invalid) {
            this.validateForm.markAllAsTouched();
            return;
        }
        this.loading = true;
        const loginDetails: ILogin = {
            login: this.validateForm.value.userName,
            password: this.validateForm.value.password,
        };
        this._homeService.login(loginDetails)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                }))
            .subscribe((data: IAuthorization) => {

                this._cookieService.set('accessToken', data.accessToken);
                this._cookieService.set('refreshToken', data.refreshToken);
                this._nzModal.destroy();
                this._router.navigate(['/playlist']);
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
