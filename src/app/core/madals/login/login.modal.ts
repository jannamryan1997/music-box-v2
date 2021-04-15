import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: 'login.modal.html',
    styleUrls: ['login.modal.scss']
})

export class LoginModalComponent implements OnInit, OnDestroy {

    private _unsubsctibe$ = new Subject<void>();
    public validateForm!: FormGroup;
    public errorMessage!: string;
    constructor(private _fb: FormBuilder) { }

    ngOnInit(): void {
        this._initForm();
    }

    private _initForm(): void {
        this.validateForm = this._fb.group({
            userName: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    public submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }

    ngOnDestroy(): void {
        this._unsubsctibe$.next();
        this._unsubsctibe$.complete();
    }
}
