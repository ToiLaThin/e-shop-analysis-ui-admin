import { Component } from "@angular/core";
import { DiscountType } from "../../../core/ui-models/discount-type";

@Component({
    selector: 'app-coupon-list',
    templateUrl: './coupon-list.component.html',
    styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent {
    get DiscountType() {
        return DiscountType;
    }
}