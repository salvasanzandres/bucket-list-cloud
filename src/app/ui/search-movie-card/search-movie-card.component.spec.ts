import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchMovieCardComponent} from './search-movie-card.component';
import {SnackbarService} from '../../core/services/snackbar.service';
import {StoreService} from '../../core/services/store.service';
import {MovieService} from '../../core/services/movie.service';

describe('SearchMovieCardComponent', () => {
    let component: SearchMovieCardComponent;
    let fixture: ComponentFixture<SearchMovieCardComponent>;

    beforeEach(async(() => {
        const spyStoreService = jasmine.createSpyObj('StoreService', ['init']);
        const spyMovieService = jasmine.createSpyObj('MovieService', ['']);

        TestBed.configureTestingModule({
            declarations: [SearchMovieCardComponent],
            providers: [{provide: StoreService, useValue: spyStoreService},
                {provide: MovieService, useValue: spyMovieService},
                SnackbarService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchMovieCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
