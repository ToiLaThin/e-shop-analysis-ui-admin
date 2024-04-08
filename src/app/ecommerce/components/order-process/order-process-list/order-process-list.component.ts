import { Component } from "@angular/core";
import { ColorSvgNames } from "../../../../core/components/svg-definitions/color-svg-names.enum";
export enum OrderStatus {
    createdDraft = 0,
    customerInfoConfirmed = 1,
    checkouted = 2,
    stockConfirmed = 3,
    refunded = 4,
    cancelled = 5,
    completed = 6
}

export interface IOrderDraftViewModel {
    orderId: string;
    subTotal: number;
    totalDiscount: number;
}

export interface IOrderViewModel {
    orderId: string;
    orderStatus: OrderStatus;
    subTotal: number;
    totalDiscount: number;
}

export interface IComment {
    commentId: string;
    productBusinessKey: string;
    userId: string;
    commentDetail: string;
    dateModified: Date;
}

const orderDrafts: IOrderDraftViewModel[] = [
    {
        orderId: 'd5f3e2ea-5318-46fb-aad8-4bdf1f073a47',
        subTotal: 100,
        totalDiscount: 10
    },
    {
        orderId: '562db5c0-499e-4ae0-8631-9bd41a1c8d5d',
        subTotal: 200,
        totalDiscount: 0
    },
    {
        orderId: '3edccda3-4f65-488a-9425-974317d68886',
        subTotal: 300,
        totalDiscount: 20
    }
];
@Component({
    selector: 'app-order-process-list',
    templateUrl: './order-process-list.component.html',
    styleUrls: ['./order-process-list.component.scss']
})
export class OrderProcessListComponent {
    orderDrafts: IOrderDraftViewModel[] = orderDrafts;
    get ColorSvgNames() {
        return ColorSvgNames;
    }
    constructor() {}

    selectTab(event: MouseEvent) {
        event.preventDefault();
        const target = event.target as HTMLElement;
        console.log(target);

        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active'));
        target.classList.add('active');
    }
}