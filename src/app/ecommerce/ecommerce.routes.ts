import { Routes } from "@angular/router";
import { OrdersComponent } from "./components/orders/orders.component";
import { AddCatalogComponent } from "./components/add-catalog/add-catalog.component";
import { AddSubCatalogComponent } from "./components/add-subcatalog/add-subcatalog.component";
import { ProviderListComponent } from "./components/provider-list/provider-list.component";
import { CouponListComponent } from "./components/coupon-list/coupon-list.component";
import { SaleListComponent } from "./components/sale-list/sale-list.component";
import { ProviderList2Component } from "./components/provider-list-2/provider-list-2.component";
import { ProviderList3Component } from "./components/provider-list-3/provider-list-3.component";
import { OrderProcessListComponent } from "./components/order-process/order-process-list/order-process-list.component";
import { OrderTrackingStepperComponent } from "./components/order-process/order-tracking-stepper/order-tracking-stepper.component";
import { OrderTrackingPaymentMethodsComponent } from "./components/order-process/order-tracking-tabs/order-tracking-payment-methods/order-tracking-payment-methods.component";
import { OrderTrackingCustomerInfoComponent } from "./components/order-process/order-tracking-tabs/order-tracking-customer-info/order-tracking-customer-info.component";

export const ecomRoutes: Routes = [
    {
        path: '',
        component: OrderProcessListComponent,
    },
    {
        path: 'add-catalog',
        component: AddCatalogComponent
    },
    {
        path: 'add-subcatalog',
        component: AddSubCatalogComponent
    },
    {
        path: 'provider-list',
        component: ProviderListComponent
    },
    {
        path: 'coupon-list',
        component: CouponListComponent
    },
    {
        path: 'sale-list',
        component: SaleListComponent
    },
    {
        path: 'provider-list-2',
        component: ProviderList2Component
    },
    {
        path: 'provider-list-3',
        component: ProviderList3Component
    },
    {
        path: 'order-process-list',
        component: OrderProcessListComponent
    },
    {
        path: 'order-tracking-stepper',
        component: OrderTrackingStepperComponent
    }
]