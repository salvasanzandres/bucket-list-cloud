import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFireAuth} from '@angular/fire/auth';
import {of} from 'rxjs';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        const SpyAngularFireAuth = jasmine.createSpyObj('AngularFireAuth', [''],
            {auth: null, authState: of(true)});

        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [{provide: AngularFireAuth, useValue: SpyAngularFireAuth}]
        });
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
