import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
    @Input() like: boolean;

    constructor() {
    }

    ngOnInit(): void {
    }

}
