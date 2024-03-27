import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { SideNavComponent } from "./components/sidenav/sidenav.component";
import { SvgDefinitionsComponent } from "./components/svg-definitions/svg-definitions.component";
import { SvgIcon } from "./components/svg-icon/svg-icon.component";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./components/button/button.component";
import { InputComponent } from "./components/input/input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PillComponent } from "./components/pill/pill.component";
import { CouponComponent } from "./components/coupon/coupon.component";
import { CouponPlaceholderComponent } from "./components/coupon-placeholder/coupon-placeholder.component";
import { ProductChipComponent } from "./components/product-chip/product-chip.component";
import { ProductChip3Component } from "./components/product-chip-3/product-chip-3.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { Coupon2Component } from "./components/coupon-2/coupon-2.component";
import { ProductCard2Component } from "./components/product-card-2/product-card-2.component";
@NgModule({
    declarations: [
        HeaderComponent,
        SideNavComponent,
        SvgDefinitionsComponent,
        SvgIcon,
        ButtonComponent,
        InputComponent,
        PillComponent,
        CouponComponent,
        Coupon2Component,
        CouponPlaceholderComponent,
        ProductChipComponent,
        ProductChip3Component,
        ProductCardComponent,
        ProductCard2Component
    ],
    imports: [
        CommonModule, //to have asyn pipe in SideNavComponent
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        HeaderComponent,
        SideNavComponent,
        SvgDefinitionsComponent,
        SvgIcon,
        ButtonComponent,
        InputComponent,
        PillComponent,
        CouponComponent,
        Coupon2Component,
        CouponPlaceholderComponent,
        ProductChipComponent,
        ProductChip3Component,
        ProductCardComponent,
        ProductCard2Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    //for avoiding ion-icon is not a known element
})
export class CoreModule {

}