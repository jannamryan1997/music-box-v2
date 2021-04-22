import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { IResataurants } from 'src/app/core/modules/restaurant';
import { ApprovalsService } from '../../approvals.service';

@Component({
    selector: 'app-create-approvals',
    templateUrl: 'create-approvals.modal.html',
    styleUrls: ['create-approvals.modal.scss']
})

export class CreateApprovalsModuleComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    @Input() item!: IResataurants;
    public validateForm!: FormGroup;
    public errorMessage!: string;
    public loading = false;
    public disableInput = true;
    public localImage!: string;
    constructor(
        @Inject('FILE_URL') private _fileUrl: string,
        private _approvalsService: ApprovalsService,
        private _fb: FormBuilder,
        private _NzModalRef: NzModalRef) { }

    ngOnInit(): void {
        this._initForm();
    }

    private _initForm(): void {
        this.validateForm = this._fb.group({
            address: ['', Validators.required],
            name: ['', Validators.required],
            phone_number: ['', Validators.required],
            isAdmin_verified: [],
        });
        this._setPatchValue();
    }

    private _setPatchValue(): void {
        this.validateForm.patchValue({
            address: this.item.address,
            name: this.item.name,
            phone_number: this.item.phoneNumber,
            isAdmin_verified: this.item.isAdminVerified,
        });
        this.localImage = this._fileUrl + this.item.avatar;
        if (!this.item.avatar) {
            this.localImage = 'assets/images/logo.png';
        }
    }

    public submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }

    public onClickCreateRestaurnat(): void {
        this.loading = true;
        this._approvalsService.resrtaratCreate(this.item?.id, this.validateForm.value.isAdmin_verified)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe((data) => {
                this._NzModalRef.close('create restaurant');

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
