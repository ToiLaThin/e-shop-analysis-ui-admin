import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { OrderDetailSideComponent } from '../order-detail-side/order-detail-side.component';
import { OrderDetailPopComponent } from '../order-detail-pop/order-detail-pop.component';
import { IOrder, OrderStatus } from '../../models/order-detail.interface';

@Component({
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {
    constructor(private _modalService: NzModalService, private _drawerService: NzDrawerService) {}

    order: IOrder = {
        orderId: 'o123456',
        orderDate: new Date(2021,9, 1),
        orderStatus: OrderStatus.Pending,
        subTotal: 200000,
        orderItems: [
            {
                productId: 'p1',
                productName: 'Airpods Pro x64GB new len',
                productImage: 'https://choihay.vn/images/products/2019/11/06/original/airpods-pro-rep-11_1573008008-copy.jpg',
                subCatalogName: 'Electronics',
                productPrice: 20000,
                productQuantity: 2,
                productTotal: 40000,
            },
            {
                productId: 'p2',
                productName: 'Smartphone Samsung Galaxy S21 Ultra 5G',
                productImage: 'https://cdn.tgdd.vn/Products/Images/42/237603/samsung-galaxy-a22-4g-mint-1-600x600.jpg',
                subCatalogName: 'Electronics',
                productPrice: 50000,
                productQuantity: 3,
                productTotal: 150000,
            },
            {
                productId: 'p3',
                productName: 'T-shirt Nike Sportswear Club Fleece',
                productImage: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1e6fa6f-8de2-4efa-a61f-de539a487006/sportswear-older-cotton-t-shirt-Tw3FKq.png',
                subCatalogName: 'Sportswear',
                productPrice: 10000,
                productQuantity: 1,
                productTotal: 10000,
            },
            {
                productId: 'p1',
                productName: 'Airpods Pro x64GB new len',
                productImage: 'https://choihay.vn/images/products/2019/11/06/original/airpods-pro-rep-11_1573008008-copy.jpg',
                subCatalogName: 'Electronics',
                productPrice: 20000,
                productQuantity: 2,
                productTotal: 40000,
            },
            {
                productId: 'p2',
                productName: 'Smartphone Samsung Galaxy S21 Ultra 5G',
                productImage: 'https://cdn.tgdd.vn/Products/Images/42/237603/samsung-galaxy-a22-4g-mint-1-600x600.jpg',
                subCatalogName: 'Electronics',
                productPrice: 50000,
                productQuantity: 3,
                productTotal: 150000,
            },
            {
                productId: 'p3',
                productName: 'T-shirt Nike Sportswear Club Fleece',
                productImage: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1e6fa6f-8de2-4efa-a61f-de539a487006/sportswear-older-cotton-t-shirt-Tw3FKq.png',
                subCatalogName: 'Sportswear',
                productPrice: 10000,
                productQuantity: 1,
                productTotal: 10000,
            },
            {
                productId: 'p1',
                productName: 'Airpods Pro x64GB new len',
                productImage: 'https://choihay.vn/images/products/2019/11/06/original/airpods-pro-rep-11_1573008008-copy.jpg',
                subCatalogName: 'Electronics',
                productPrice: 20000,
                productQuantity: 2,
                productTotal: 40000,
            },
            {
                productId: 'p2',
                productName: 'Smartphone Samsung Galaxy S21 Ultra 5G',
                productImage: 'https://cdn.tgdd.vn/Products/Images/42/237603/samsung-galaxy-a22-4g-mint-1-600x600.jpg',
                subCatalogName: 'Electronics',
                productPrice: 50000,
                productQuantity: 3,
                productTotal: 150000,
            },
            {
                productId: 'p3',
                productName: 'T-shirt Nike Sportswear Club Fleece',
                productImage: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1e6fa6f-8de2-4efa-a61f-de539a487006/sportswear-older-cotton-t-shirt-Tw3FKq.png',
                subCatalogName: 'Sportswear',
                productPrice: 10000,
                productQuantity: 1,
                productTotal: 10000,
            }
        ]
    }

    autoGrow(event: any) {
        console.log(event.target.scrollHeight, event.target.style.height);

        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    }

    openOrderDetailSide() {
        this._drawerService.create({
            nzTitle: undefined,
            nzContent: OrderDetailSideComponent,
            nzPlacement: 'right',
            nzFooter: '',
            nzWidth: '35%',
            nzData: {
                order: this.order
            }
        });
    }

    openOrderDetailPop() {
        this._modalService.create({
            nzTitle: undefined,
            nzContent: OrderDetailPopComponent,
            nzFooter: null,
            nzWidth: '50%',
            nzData: {
                order: this.order
            }
        });
    }
}
