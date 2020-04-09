import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../core/services/store.service';
import {Observable} from 'rxjs';

import {Movie, User} from '../../core/models/user';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    user$: Observable<User>;
    movies$: Observable<Movie[]>;
    isSearchMovie = false;
    movieDetails: Movie;


    constructor(private storeService: StoreService,
                private authService: AuthService,
                private route: Router) {
    }

    ngOnInit(): void {
        this.storeService.init(this.authService.uid);
        this.user$ = this.storeService.user$;
        this.movies$ = this.storeService.movies$;
        this.isSearchMovie = this.route.url === '/search';
    }

    openSearchMovieCard() {
        this.isSearchMovie = true;
    }

    resetMovieDetails() {
        this.movieDetails = null;
    }
}
