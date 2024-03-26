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

@NgModule({
    declarations: [
        HeaderComponent,
        SideNavComponent,
        SvgDefinitionsComponent,
        SvgIcon,
        ButtonComponent,
        InputComponent,
        PillComponent
    ],
    imports: [
        CommonModule, //to have asyn pipe in SideNavComponent
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        HeaderComponent,
        SideNavComponent,
        SvgDefinitionsComponent,
        SvgIcon,
        ButtonComponent,
        InputComponent,
        PillComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    //for avoiding ion-icon is not a known element
})
export class CoreModule {

}