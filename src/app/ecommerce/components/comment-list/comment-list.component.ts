import { Component } from '@angular/core';

class CommentListData {
    constructor(
        public imgUrl: number,
        public username: string,
        public comment: string,
        public rating: number,
        public date: string
    ) {}
}
@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent {
    comments: CommentListData[] = [
        new CommentListData(1, 'John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 4, '2020-12-01'),
        new CommentListData(2, 'Jane Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 5, '2020-12-02'),
        new CommentListData(3, 'John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 3, '2020-12-03'),
        new CommentListData(4, 'Jane Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 2, '2020-12-04'),
        new CommentListData(5, 'John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1, '2020-12-05'),
        new CommentListData(6, 'Jane Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 4, '2020-12-06'),
        new CommentListData(7, 'John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 5, '2020-12-07'),
        new CommentListData(8, 'Jane Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 3, '2020-12-08'),
        new CommentListData(9, 'John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 2, '2020-12-09'),
        new CommentListData(10, 'Jane Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1, '2020-12-10')
    ];
}
