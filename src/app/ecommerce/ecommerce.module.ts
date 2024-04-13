import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ecomRoutes } from "./ecommerce.routes";
import { RouterModule } from "@angular/router";
import { AddSubCatalogComponent } from "./components/add-subcatalog/add-subcatalog.component";
import { AddCatalogComponent } from "./components/add-catalog/add-catalog.component";
import { CoreModule } from "../core/core.module";
import { ProviderListComponent } from "./components/provider-list/provider-list.component";
import { ProviderListPaginationComponent } from "./components/provider-list/provider-list-pagination.component";
import { ProviderListHeaderComponent } from "./components/provider-list/provider-list-header.component";
import { CommonModule } from "@angular/common";
import { CouponListComponent } from "./components/coupon-list/coupon-list.component";
import { SaleListComponent } from "./components/sale-list/sale-list.component";
import { CouponListFilterComponent } from "./components/coupon-list/coupon-list-filter.component";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from "@angular/forms";
import { CouponListAdvanceFilterComponent } from "./components/coupon-list/coupon-list-advance-filter.component";
import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal'
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ProviderList2Component } from "./components/provider-list-2/provider-list-2.component";
import { ProviderList3Component } from "./components/provider-list-3/provider-list-3.component";
import { OrderProcessListComponent } from "./components/order-process/order-process-list/order-process-list.component";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { OrderTrackingNotifyCustomerComponent } from "./components/order-process/order-tracking-tabs/order-tracking-notify-customer/order-tracking-notify-customer.component";
import { OrderTrackingCustomerInfoComponent } from "./components/order-process/order-tracking-tabs/order-tracking-customer-info/order-tracking-customer-info.component";
import { OrderTrackingPaymentMethodsComponent } from "./components/order-process/order-tracking-tabs/order-tracking-payment-methods/order-tracking-payment-methods.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommentFormComponent } from "./components/comment-form/comment-form.component";
import { CommentListComponent } from "./components/comment-list/comment-list.component";

@NgModule({
    declarations: [
        AddSubCatalogComponent,
        AddCatalogComponent,
        ProviderListHeaderComponent,
        ProviderListPaginationComponent,
        ProviderListComponent,
        ProviderList2Component,
        ProviderList3Component,
        CouponListComponent,
        CouponListFilterComponent,
        SaleListComponent,
        CouponListAdvanceFilterComponent,
        OrderProcessListComponent,

        OrderTrackingNotifyCustomerComponent,
        OrderTrackingCustomerInfoComponent,
        OrderTrackingPaymentMethodsComponent,

        CommentFormComponent,
        CommentListComponent
    ],
    imports: [
        RouterModule.forChild(ecomRoutes),
        CoreModule,
        CommonModule, //have pipe date
        FormsModule, // have NgModel
        NzButtonModule,
        NzDropDownModule,
        NzIconModule,
        NzDatePickerModule,
        NzCheckboxModule,
        NzModalModule,
        NzSliderModule,
        NzLayoutModule,
        NzToolTipModule
        
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class EcommerceModule {

}
