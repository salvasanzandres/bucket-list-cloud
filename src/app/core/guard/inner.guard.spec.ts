import {getTestBed, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {InnerGuard} from './inner.guard';
import {AuthService} from '../services/auth.service';

describe('InnerGuard', () => {
    let guard: InnerGuard;


    beforeEach(() => {
        const spyAuthService = jasmine.createSpyObj('AuthService', ['isUserSignedInAsObs$'], {userData: 'kk'});

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule],
            providers: [{provide: AuthService, useValue: spyAuthService}]
        });

        guard = TestBed.inject(InnerGuard);
    });


    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
