import { Component } from '@angular/core';


@Component({
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {

    autoGrow(event: any) {
        console.log(event.target.scrollHeight, event.target.style.height);
        
        event.target.style.height = "auto";
        event.target.style.height = (event.target.scrollHeight) + "px";
    }
}
