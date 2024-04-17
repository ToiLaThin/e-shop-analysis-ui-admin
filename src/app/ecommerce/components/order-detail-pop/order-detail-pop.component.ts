import { Component, Inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { IOrder } from '../../models/order-detail.interface';

@Component({
    selector: 'app-order-detail-pop',
    templateUrl: './order-detail-pop.component.html',
    styleUrls: ['./order-detail-pop.component.scss']
})
export class OrderDetailPopComponent {
    constructor(
        private _modalRef: NzModalRef,
        @Inject(NZ_MODAL_DATA) public data: { order: IOrder }
    ) {}

    ngOnInit() {
        this._modalRef.afterOpen.subscribe(() => {
            console.log(this.data.order)
        })
    }

    get orderDetail() {
        return this.data.order;
    }

    close() {
        this._modalRef.close();
    }
}
