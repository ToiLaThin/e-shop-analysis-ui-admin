import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { SideNavComponent } from "./components/sidenav/sidenav.component";

@NgModule({
    declarations: [
        HeaderComponent,
        SideNavComponent
    ],
    imports: [],
    exports: [
        HeaderComponent,
        SideNavComponent
    ]
})
export class CoreModule {

}