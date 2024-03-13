import { Component, OnInit } from "@angular/core";
import { SideBarLink } from "../../ui-models/sidebar-link";
import { Observable } from "rxjs";
import { SideBarCollapseService } from "../../services/sidebar-collapse.service";

@Component({
    selector: "app-sidenav",
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit{
    collapsed$!: Observable<boolean>;

    constructor(private _sideBarCollapseService: SideBarCollapseService) {{}}

    ngOnInit(): void {
        this.collapsed$ = this._sideBarCollapseService.collapsed$;
    }

    toggleCollapse() {
        this._sideBarCollapseService.toggleCollapse();
        let headings = document.querySelectorAll('.navigation-body p');
        headings.forEach(h => h.classList.toggle('hidden'));
    }

    sideBarLinks: SideBarLink[] = [
        new SideBarLink(false, 'speedometer-outline', '', 'Dashboard'),
        new SideBarLink(true, 'water-outline', '', 'Colors', 'Theme'),
        new SideBarLink(false, 'pencil-outline', '', 'Typography'),
        new SideBarLink(true, 'extension-puzzle-outline', '', 'Base', 'Components'),
        new SideBarLink(true, 'star-outline', '', 'Pages', 'Extras'),
        new SideBarLink(true, 'document-text-outline', '', 'Docs', 'Links'),

    ]
}