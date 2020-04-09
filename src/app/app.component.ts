import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

import {NavigationService} from './core/services/navigation.service';
import {AuthService} from './core/services/auth.service';
import {Message, SnackbarService} from './core/services/snackbar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'bucket-list-cloud';
    displayNavigation$: Observable<boolean>;
    errorMessage: string;
    isUserSignedInAsObs$: Observable<boolean>;

    testDisplaySnack = false;

    constructor(private navigationService: NavigationService,
                private authService: AuthService,
                private router: Router,
                private snackbarService: SnackbarService) {

        this.displayNavigation$ = this.navigationService.displayNavigation$;
    }

    ngOnInit() {
        this.isUserSignedInAsObs$ = this.authService.isUserSignedInAsObs$();
    }

    closeMenu() {
        this.navigationService.setNavigation(false);
    }

    logout() {
        this.authService.signOutUser().then(value => {
            this.router.navigate(['signin']);
        }).catch(err => {
            this.snackbarService.publishMessage(new Message(err.message));
        });
    }
}
