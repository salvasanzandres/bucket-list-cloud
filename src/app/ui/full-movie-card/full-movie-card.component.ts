import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output, Renderer2} from '@angular/core';

import {Movie} from '../../core/models/user';
import {StoreService} from '../../core/services/store.service';
import {Message, SnackbarService} from '../../core/services/snackbar.service';

@Component({
    selector: 'app-full-movie-card',
    templateUrl: './full-movie-card.component.html',
    styleUrls: ['./full-movie-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullMovieCardComponent implements OnDestroy {
    @Input() movieDetails: Movie;
    @Output() closeMovieCardEvent: EventEmitter<boolean> = new EventEmitter();

    constructor(private storeService: StoreService,
                private snackbarService: SnackbarService,
                private renderer: Renderer2,
                private cdr: ChangeDetectorRef) {
        this.renderer.addClass(document.body, 'modal-open');
    }

    closeFullMovieWindow() {
        this.closeMovieCardEvent.emit(true);
    }

    removeMovie(movie: Movie) {
        this.storeService.removeMovie(movie).then(response => {
            this.snackbarService.publishMessage(new Message('Movie removed'));
            this.closeFullMovieWindow();
        }).catch(err => {
            this.snackbarService.publishMessage(new Message(err.message));
        });
    }
    saveLike(likeValue: boolean) {
        this.storeService.updateMovie({...this.movieDetails, ...{like: likeValue}}).then(response => {
            this.snackbarService.publishMessage(new Message('Movie updated'));
            this.movieDetails = {...this.movieDetails, ...{like: likeValue}};
            this.cdr.detectChanges();
        }).catch(err => {
            this.snackbarService.publishMessage(new Message(err.message));
        });
    }
    ngOnDestroy() {
        this.renderer.removeClass(document.body, 'modal-open');
    }
}
