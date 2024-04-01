import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-coupon-placeholder',
    templateUrl: './coupon-placeholder.component.html',
    styleUrls: ['./coupon-placeholder.component.scss']
})
export class CouponPlaceholderComponent {
    @Input() type!: 'add' | 'edit' | 'delete';
    constructor() {}
}