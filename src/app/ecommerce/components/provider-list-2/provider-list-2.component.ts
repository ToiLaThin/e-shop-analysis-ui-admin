import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'app-provider-list-2',
    templateUrl: 'provider-list-2.component.html',
    styleUrls: ['./provider-list-2.component.scss'],
})
export class ProviderList2Component {
    constructor() {
    }

    increaseQty() {
        const qtyInput = document.getElementById('qtyInput') as HTMLInputElement;
        qtyInput.stepUp();
    }

    decreaseQty() {
        const qtyInput = document.getElementById('qtyInput') as HTMLInputElement;
        qtyInput.stepDown();
    }
}