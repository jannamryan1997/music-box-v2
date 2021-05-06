import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { ConfirmDeleteModalComponent } from 'src/app/core/madals';
import { PaginatorResponse } from 'src/app/core/modules/paginator-response';
import { IResataurants } from 'src/app/core/modules/restaurant';
import { ApprovalsService } from './approvals.service';
import { CreateApprovalsModuleComponent } from './modals';

@Component({
    selector: 'app-approvals',
    templateUrl: 'approvals.view.html',
    styleUrls: ['approvals.view.scss']
})

export class ApprovalsViewComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    public searchControl: FormControl = new FormControl('');
    public loading = false;
    public restaurantsDetails: IResataurants[] = [];
    public page = 1;
    public countRestaurnat!: number;
    public errorMessage!: string;

    constructor(private _approvalsService: ApprovalsService, private _nzModalService: NzModalService) { }

    ngOnInit(): void {
        this.searchControl.valueChanges.subscribe((data) => {
            if (data.length >= 3) {
                this._getRestaurants(false);
            }
            else {
                this._getRestaurants();
            }
        });
        this._getRestaurants();
    }

    private _getRestaurants(isShowloading = true): void {
        if (isShowloading) {
            this.loading = true;
        }
        const searchValue: string = this.searchControl.value;
        const page: number = this.page;
        this._approvalsService.getRestaurant(page, searchValue)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe((data: PaginatorResponse<IResataurants[]>) => {
                this.countRestaurnat = data.count;
                this.restaurantsDetails = data.data;
            });
    }
    private _deleteApproval(id: number): void {
        this._approvalsService.deleteRestaurant(id)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => { })
            )
            .subscribe((data) => {
                this._getRestaurants();
            },
                err => {
                    this.errorMessage = err.message;
                }
            );
    }

    public onClickOpenCreateApprovalsModal(item: IResataurants): void {
        const dialogRef = this._nzModalService.create({
            nzTitle: 'Approve',
            nzContent: CreateApprovalsModuleComponent,
            nzFooter: 'false',
            nzComponentParams: { item }
        });
        dialogRef.afterClose.subscribe((data: string) => {
            if (data === 'create restaurant') {
                this._getRestaurants();
            }
        });
    }

    public onClickDeleteItem(item: IResataurants): void {
        const dialogRef = this._nzModalService.create({
            nzTitle: 'Confirm Delete',
            nzContent: ConfirmDeleteModalComponent,
            nzFooter: 'false'
        });
        dialogRef.afterClose.subscribe((data) => {
            if (data === 'confirm-delete') {
                this._deleteApproval(item.id);
            }
        });
    }

    public paginate($event: PageEvent): void {
        this.page = $event.pageIndex + 1;
        this._getRestaurants();
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
