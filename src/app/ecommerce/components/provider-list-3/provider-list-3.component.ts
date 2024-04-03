import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'app-provider-list-3',
    templateUrl: 'provider-list-3.component.html',
    styleUrls: ['./provider-list-3.component.scss'],
})
export class ProviderList3Component {
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

    notify() {
        console.log('You will be notified when the product is available');
    }
}