import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../services/auth.service';

describe('AuthGuard', () => {
    let guard: AuthGuard;

    beforeEach(() => {
        const spyAuthService = jasmine.createSpyObj('AuthService', ['isUserSignedInAsObs$'], {userData: 'kk'});

        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [{provide: AuthService, useValue: spyAuthService}]
        });
        guard = TestBed.inject(AuthGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
