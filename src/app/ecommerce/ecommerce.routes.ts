import { Routes } from "@angular/router";
import { OrdersComponent } from "./components/orders/orders.component";
import { AddCatalogComponent } from "./components/add-catalog/add-catalog.component";
import { AddSubCatalogComponent } from "./components/add-subcatalog/add-subcatalog.component";

export const ecomRoutes: Routes = [
    {
        path: '',
        component: OrdersComponent,
    },
    {
        path: 'add-catalog',
        component: AddCatalogComponent
    },
    {
        path: 'add-subcatalog',
        component: AddSubCatalogComponent
    }
]