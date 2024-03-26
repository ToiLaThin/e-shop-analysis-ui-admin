import { NgModule } from "@angular/core";
import { ecomRoutes } from "./ecommerce.routes";
import { RouterModule } from "@angular/router";
import { AddSubCatalogComponent } from "./components/add-subcatalog/add-subcatalog.component";
import { AddCatalogComponent } from "./components/add-catalog/add-catalog.component";
import { CoreModule } from "../core/core.module";
import { ProviderListComponent } from "./components/provider-list/provider-list.component";
import { ProviderListPaginationComponent } from "./components/provider-list/provider-list-pagination.component";
import { ProviderListHeaderComponent } from "./components/provider-list/provider-list-header.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AddSubCatalogComponent,
        AddCatalogComponent,
        ProviderListHeaderComponent,
        ProviderListPaginationComponent,
        ProviderListComponent
    ],
    imports: [
        RouterModule.forChild(ecomRoutes),
        CoreModule,
        CommonModule //have pipe date
    ],
    exports: []
})
export class EcommerceModule {

}
