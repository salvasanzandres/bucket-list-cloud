import {TestBed, async, getTestBed, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';

import {AppComponent} from './app.component';
import {NavigationService} from './core/services/navigation.service';
import {AuthService} from './core/services/auth.service';


describe('AppComponent', () => {

    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let serviceAuth: AuthService;

    beforeEach(async(() => {
        const spyAuthService = jasmine.createSpyObj('AuthService', ['isUserSignedInAsObs$'], {userData: 'kk'});
        spyAuthService.isUserSignedInAsObs$.and.returnValue(of(false));

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [NavigationService, {provide: AuthService, useValue: spyAuthService}],
            declarations: [
                AppComponent
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        component.ngOnInit();

        serviceAuth = TestBed.inject(AuthService);
        console.log(serviceAuth);

    }));

    it('should create the app', () => {
        expect(serviceAuth.isUserSignedInAsObs$).toHaveBeenCalled();
        // expect(spyAuthService.isUserSignedInAsObs$).
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
