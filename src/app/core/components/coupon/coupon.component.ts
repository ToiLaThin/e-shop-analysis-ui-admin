import { Component, Input } from '@angular/core';
import { DiscountType } from '../../ui-models/discount-type';

@Component({
    selector: 'app-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.scss']
})
export class CouponComponent {
    @Input({ required: true }) size: 'sm' | 'md' | 'lg' = 'md';
    @Input({ required: true }) discountType: DiscountType = DiscountType.PERCENT;
    @Input({ required: true }) discountValue!: number;

    get DiscountType() {
        return DiscountType;
    }
}
