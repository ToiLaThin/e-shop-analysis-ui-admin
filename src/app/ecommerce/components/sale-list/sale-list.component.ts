import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";

@Component({
    selector: 'app-sale-list',
    templateUrl: './sale-list.component.html',
    styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent {
    @ViewChild('rightCol', {read: ElementRef, static: true}) rightCol!: ElementRef;
    currentViewModeTable: boolean = false;
    constructor(private _renderer: Renderer2) {}

    closeRightPart() {
        this._renderer.addClass(this.rightCol.nativeElement, 'collapse');
    }

    openRightPart() {
        this._renderer.removeClass(this.rightCol.nativeElement, 'collapse');
    }

    toggleViewMode() {
        this.currentViewModeTable = !this.currentViewModeTable;
    }

    addNewSaleModal() {
        
    }
}