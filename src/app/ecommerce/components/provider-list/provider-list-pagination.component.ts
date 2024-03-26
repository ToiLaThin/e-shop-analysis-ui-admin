import { Component, OnInit } from "@angular/core";
import { ITableRow, OrderStatus, PaymentMode } from "./provider-list.component";

@Component({
    selector: 'app-provider-list-pagination',
    templateUrl: './provider-list-pagination.component.html',
    styleUrls: ['./provider-list-pagination.component.scss']
})
export class ProviderListPaginationComponent implements OnInit {

    constructor() {}

    mockDatas: ITableRow[] = [
        {
            id: '#20462',
            product: 'Hat',
            productImg: 'https://media.istockphoto.com/id/1453988945/photo/yellow-bucket-hat-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Dwt6ToZZBqfZOiHj7S4lNZfBx4CsPM9_WEa8e4SPZC8=',
            customer: 'Matt Dickerson',
            date: new Date(),
            amount: 4.98,
            paymentMode: PaymentMode.BANK,
            orderStatus: OrderStatus.DELIVERED
        },
        {
            id: '#18933',
            product: 'Laptop',
            productImg: 'https://cdn.nguyenkimmall.com/images/detailed/828/10053095-laptop-lenovo-ideapad-3-14iau7-82rj0019vn-1.jpg',
            customer: 'Wiktoria',
            date: new Date(),
            amount: 8.95,
            paymentMode: PaymentMode.CASH,
            orderStatus: OrderStatus.DELIVERED
        },
        {
            id: '#45169',
            product: 'Phone',
            productImg: 'https://cdn.thewirecutter.com/wp-content/media/2023/10/androidphones-2048px-4861.jpg',
            customer: 'Trixie Byrd',
            date: new Date(),
            amount: 1149.95,
            paymentMode: PaymentMode.BANK,
            orderStatus: OrderStatus.PROCESSING
        },
        {
            id: '#34304',
            product: 'Bag',
            productImg: 'https://mainguyen.sgp1.digitaloceanspaces.com/107933/tui-deo-cheo-da-nang-tomtoc-croxbody-edc-sling-bag4587.jpg',
            customer: 'Brad Mason',
            date: new Date(),
            amount: 899.95,
            paymentMode: PaymentMode.BANK,
            orderStatus: OrderStatus.CANCELED
        },
        {
            id: '#17188',
            product: 'Headset',
            productImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTR3?wid=1377&hei=2057&fmt=jpeg&qlt=95&.v=1687660671097',
            customer: 'Sanderson',
            date: new Date(),
            amount: 22.95,
            paymentMode: PaymentMode.CASH,
            orderStatus: OrderStatus.DELIVERED
        },
        {
            id: '#73003',
            product: 'Mouse',
            productImg: 'https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m171/gallery/m171-mouse-top-view-grey.png?v=1',
            customer: 'Jun Redfern',
            date: new Date(),
            amount: 54.95,
            paymentMode: PaymentMode.BANK,
            orderStatus: OrderStatus.PROCESSING
        },
        {
            id: '#58825',
            product: 'T-shirt',
            productImg: 'https://pos.nvncdn.com/e55206-92814/ps/20230704_QMkdr8j7Do.jpeg',
            customer: 'Miriam Kidd',
            date: new Date(),
            amount: 22.95,
            paymentMode: PaymentMode.CASH,
            orderStatus: OrderStatus.CANCELED
        }


    ]
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}