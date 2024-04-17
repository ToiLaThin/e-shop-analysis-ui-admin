import { Component, Inject, inject } from '@angular/core';
import { NZ_DRAWER_DATA, NzDrawerRef } from 'ng-zorro-antd/drawer';
import { IOrder } from '../../models/order-detail.interface';

@Component({
    selector: 'app-order-detail-side',
    templateUrl: './order-detail-side.component.html',
    styleUrls: ['./order-detail-side.component.scss']
})
export class OrderDetailSideComponent {
    constructor(
        private _drawerRef: NzDrawerRef,
        @Inject(NZ_DRAWER_DATA) public data: { order: IOrder }
    ) {}

    ngOnInit() {
        this._drawerRef.afterOpen.subscribe(() => {
            console.log(this.data.order);
        });
        this._drawerRef.afterClose.subscribe(() => {
            console.log('Drawer closed');
        });
    }

    get orderDetail() {
        return this.data.order;
    }

    close() {
        this._drawerRef.close();
    }
}
