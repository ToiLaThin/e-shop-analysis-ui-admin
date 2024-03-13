import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class SideBarCollapseService {
    collapsedSub!: BehaviorSubject<boolean>
    collapsed$!: Observable<boolean>;
    constructor() {
        this.collapsedSub = new BehaviorSubject<boolean>(false)
        this.collapsed$ = this.collapsedSub.asObservable();
    }

    toggleCollapse() {
        const isSidebarCollapsed = this.collapsedSub.getValue();
        this.collapsedSub.next(!isSidebarCollapsed);
    }

}