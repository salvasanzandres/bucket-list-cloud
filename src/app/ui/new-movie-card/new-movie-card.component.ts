import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-new-movie-card',
    templateUrl: './new-movie-card.component.html',
    styleUrls: ['./new-movie-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMovieCardComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
