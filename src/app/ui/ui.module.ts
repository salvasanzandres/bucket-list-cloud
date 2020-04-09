import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CloseComponent} from './icons/close/close.component';
import {HeaderComponent} from './header/header.component';
import {NewMovieCardComponent} from './new-movie-card/new-movie-card.component';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {SearchMovieCardComponent} from './search-movie-card/search-movie-card.component';
import {RatingComponent} from './icons/rating/rating.component';
import { FullMovieCardComponent } from './full-movie-card/full-movie-card.component';
import { LikeComponent } from './icons/like/like.component';
import { ShareComponent } from './icons/share/share.component';
import { EditButtonComponent } from './icons/edit-button/edit-button.component';
import { RemoveComponent } from './icons/remove/remove.component';
import { SnackbarComponent } from './snackbar/snackbar.component';


@NgModule({
    declarations: [CloseComponent, HeaderComponent, NewMovieCardComponent, MovieCardComponent, SearchMovieCardComponent,
        RatingComponent, FullMovieCardComponent, LikeComponent, ShareComponent, EditButtonComponent, RemoveComponent, SnackbarComponent],
    exports: [HeaderComponent, CloseComponent, NewMovieCardComponent, MovieCardComponent, SearchMovieCardComponent,
        RatingComponent, FullMovieCardComponent, LikeComponent, ShareComponent, EditButtonComponent, RemoveComponent,SnackbarComponent],
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule]
})
export class UiModule {
}

