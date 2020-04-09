import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../core/services/navigation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private navigationService: NavigationService) {
    }

    ngOnInit(): void {
    }

    toggleNavigation() {
        this.navigationService.setNavigation(!this.navigationService.displayNavigation$.value);
    }

}
