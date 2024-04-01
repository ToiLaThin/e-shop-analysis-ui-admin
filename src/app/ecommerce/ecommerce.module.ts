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

@NgModule({
    declarations: [
        AddSubCatalogComponent,
        AddCatalogComponent,
        ProviderListHeaderComponent,
        ProviderListPaginationComponent,
        ProviderListComponent,
        CouponListComponent,
        CouponListFilterComponent,
        SaleListComponent,
        CouponListAdvanceFilterComponent,
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
        NzLayoutModule
        
    ],
    exports: [],    
})
export class EcommerceModule {

}
