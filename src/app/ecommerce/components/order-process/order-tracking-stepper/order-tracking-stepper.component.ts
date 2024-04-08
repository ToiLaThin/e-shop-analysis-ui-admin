import { Component, ElementRef, OnInit, Renderer2, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-order-tracking-stepper',
    templateUrl: './order-tracking-stepper.component.html',
    styleUrls: ['./order-tracking-stepper.component.scss']
})
export class OrderTrackingStepperComponent implements OnInit {
    constructor(private _renderer: Renderer2) {}
    @ViewChildren('container', { read: ElementRef }) containers!: ElementRef[];
    ngOnInit() {}

    addActiveClass(event: Event) {
        const clickedContainer = event.target as HTMLElement;
        this.containers.forEach((container) => {
            this._renderer.removeClass(container.nativeElement, 'active');
        });

        let isReached = false;
        this.containers.forEach((container) => {
            if (container.nativeElement !== clickedContainer.parentElement && !isReached) {
                this._renderer.addClass(container.nativeElement, 'active');
            } else if (container.nativeElement === clickedContainer.parentElement) {
                isReached = true;
            }
        });
        //clickedContainer.parentElement?.classList.toggle('active');
    }
}
