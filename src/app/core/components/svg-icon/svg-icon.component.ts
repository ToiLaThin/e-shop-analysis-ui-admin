import { Component, Input } from "@angular/core";

@Component({
    selector: 'svg-icon',
    templateUrl: 'svg-icon.component.html'
})
export class SvgIcon {
    @Input() size: number = 16;
    @Input() iconName!: string;
    get iconUrl() {
        return `${window.location.href}#${this.iconName}`
        //co window.location.href cho chac an, #iconName da du
    }

}