import {Component, EventEmitter, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, skipWhile, switchMap, takeUntil, tap} from 'rxjs/internal/operators';

import {MovieService} from '../../core/services/movie.service';
import {Movie, SEARCH_STATUS} from '../../core/models/user';
import {StoreService} from '../../core/services/store.service';
import {Message, SnackbarService} from '../../core/services/snackbar.service';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-search-movie-card',
    templateUrl: './search-movie-card.component.html',
    styleUrls: ['./search-movie-card.component.scss']
})
export class SearchMovieCardComponent implements OnInit, OnDestroy {

    @Output() closeSearchWindowEvent: EventEmitter<boolean> = new EventEmitter();
    searchFormGroup: FormGroup;
    result: Movie[];
    searchStatus: SEARCH_STATUS = SEARCH_STATUS.init;
    searchStatusList = SEARCH_STATUS;
    imageCoverJoker = '../../../assets/img/background/movie-placeholder.jpg';
    loadImageError = false;
    private unsubscribe: Subject<void> = new Subject();


    constructor(private movieService: MovieService,
                private storeService: StoreService,
                private snackbarService: SnackbarService,
                private renderer: Renderer2) {
        this.renderer.addClass(document.body, 'modal-open');
    }

    ngOnInit(): void {
        this.searchFormGroup = new FormGroup({
            name: new FormControl('')
        });
        this.searchFormGroup.get('name').valueChanges.pipe(
            tap(name => {
                this.searchStatus = SEARCH_STATUS.pending;
                this.loadImageError = false;
            }),
            debounceTime(1000),
            takeUntil(this.unsubscribe),
            skipWhile(name => name.length < 5),
            switchMap(name => this.movieService.getMovies(name))
        ).subscribe(response => {
            this.result = response.splice(0, 5);
            console.log(this.result)
            this.searchStatus = SEARCH_STATUS.loaded;
        });
    }

    closeSearchWindow() {
        this.resetResults();
        this.closeSearchWindowEvent.emit(true);
    }

    addMovie(movie: Movie) {
        this.movieService.getMovie(movie.name).toPromise()
            .then(result => this.storeService.addMovie(result)
                .then(response => {
                    this.snackbarService.publishMessage(new Message('Movie added'));
                    this.resetResults();
                }).catch(err => {
                    this.snackbarService.publishMessage(new Message(err.message));
                })).catch(err => {
            this.snackbarService.publishMessage(new Message(err.message));
        });
    }

    resetResults() {
        this.searchFormGroup.get('name').setValue('', {emitEvent: false});
        this.searchStatus = SEARCH_STATUS.init;
        this.result = null;
        this.loadImageError = false;
    }

    ngOnDestroy() {
        this.renderer.removeClass(document.body, 'modal-open');
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

}
