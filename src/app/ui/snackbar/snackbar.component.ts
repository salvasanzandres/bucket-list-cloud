import {Component, OnInit} from '@angular/core';
import {SnackbarService} from '../../core/services/snackbar.service';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

    testDisplaySnack: boolean;
    snackBarServiceSubscription;

    constructor(private snackbarService: SnackbarService) {
    }

    ngOnInit() {
        this.snackBarServiceSubscription = this.snackbarService.message$;
    }


}
