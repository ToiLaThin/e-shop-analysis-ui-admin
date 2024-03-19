import { Component, Input } from "@angular/core";

@Component({
    selector: 'svg-icon',
    templateUrl: 'svg-icon.component.html'
})
export class SvgIcon {
    @Input() size: number = 16;
    @Input() wSizeIsHSize: boolean = true;
    @Input() hSize: number = 16; // if wSizeIsHSize == false, you must provide hSize
    @Input() iconName!: string;
    @Input() currentColor = 'currentColor'
    get iconUrl() {
        return `${window.location.href}#${this.iconName}`
        //co window.location.href cho chac an, #iconName da du
    }

}