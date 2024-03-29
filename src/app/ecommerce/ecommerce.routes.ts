import { Routes } from "@angular/router";
import { OrdersComponent } from "./components/orders/orders.component";
import { AddCatalogComponent } from "./components/add-catalog/add-catalog.component";
import { AddSubCatalogComponent } from "./components/add-subcatalog/add-subcatalog.component";
import { ProviderListComponent } from "./components/provider-list/provider-list.component";
import { CouponListComponent } from "./components/coupon-list/coupon-list.component";
import { SaleListComponent } from "./components/sale-list/sale-list.component";

export const ecomRoutes: Routes = [
    {
        path: '',
        // component: OrdersComponent,
        component: SaleListComponent,
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
    }
]