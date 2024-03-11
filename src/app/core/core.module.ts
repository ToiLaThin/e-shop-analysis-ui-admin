import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { SideNavComponent } from "./components/sidenav/sidenav.component";
import { SvgDefinitionsComponent } from "./components/svg-definitions/svg-definitions.component";
import { SvgIcon } from "./components/svg-icon/svg-icon.component";

@NgModule({
    declarations: [
        HeaderComponent,
        SideNavComponent,
        SvgDefinitionsComponent,
        SvgIcon
    ],
    imports: [],
    exports: [
        HeaderComponent,
        SideNavComponent,
        SvgDefinitionsComponent,
        SvgIcon
    ]
})
export class CoreModule {

}