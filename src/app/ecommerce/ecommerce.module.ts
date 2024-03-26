import { NgModule } from "@angular/core";
import { ecomRoutes } from "./ecommerce.routes";
import { RouterModule } from "@angular/router";
import { AddSubCatalogComponent } from "./components/add-subcatalog/add-subcatalog.component";
import { AddCatalogComponent } from "./components/add-catalog/add-catalog.component";
import { CoreModule } from "../core/core.module";

@NgModule({
    declarations: [
        AddSubCatalogComponent,
        AddCatalogComponent
    ],
    imports: [
        RouterModule.forChild(ecomRoutes),
        CoreModule
    ],
    exports: []
})
export class EcommerceModule {

}
