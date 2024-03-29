import { Component, Input } from "@angular/core";
import { PillType } from "../../ui-models/pill-type";

@Component({
    selector: 'app-pill',
    templateUrl: './pill.component.html',
    styleUrls: ['./pill.component.scss']
})
export class PillComponent {
    @Input() content!: string;
    @Input() className: PillType = PillType.SUCCESS;
}