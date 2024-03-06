import { NgModule } from "@angular/core";
import { ecomRoutes } from "./ecommerce.routes";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(ecomRoutes)
    ],
    exports: []
})
export class EcommerceModule {

}
