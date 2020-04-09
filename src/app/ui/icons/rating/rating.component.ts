import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {

    @Input() rating: number;
    ratingReference: Array<number> = Array.from(Array(6).keys()).slice(1);

    constructor() {}
}
