import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { SideNavComponent } from "./components/sidenav/sidenav.component";
import { SvgDefinitionsComponent } from "./components/svg-definitions/svg-definitions.component";
import { SvgIcon } from "./components/svg-icon/svg-icon.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeaderComponent,
        SideNavComponent,
        SvgDefinitionsComponent,
        SvgIcon
    ],
    imports: [
        CommonModule //to have asyn pipe in SideNavComponent
    ],
    exports: [
        HeaderComponent,
        SideNavComponent,
        SvgDefinitionsComponent,
        SvgIcon
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    //for avoiding ion-icon is not a known element
})
export class CoreModule {

}