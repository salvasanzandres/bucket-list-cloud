import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FullMovieCardComponent} from './full-movie-card.component';
import {StoreService} from '../../core/services/store.service';
import {SnackbarService} from '../../core/services/snackbar.service';
import {Movie} from '../../core/models/user';

describe('FullMovieCardComponent', () => {
    let component: FullMovieCardComponent;
    let fixture: ComponentFixture<FullMovieCardComponent>;

    beforeEach(async(() => {
        const spyStoreService = jasmine.createSpyObj('StoreService', ['init']);
        TestBed.configureTestingModule({
            declarations: [FullMovieCardComponent],
            providers: [{provide: StoreService, useValue: spyStoreService}, SnackbarService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FullMovieCardComponent);
        component = fixture.componentInstance;

        component.movieDetails = new Movie('name', 'this is desc', 5, 'me', 'me',
            'img/', '2020', '100', 'terror', 'US', 'comment', true, '1');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
