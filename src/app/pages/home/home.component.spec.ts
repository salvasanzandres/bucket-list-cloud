import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {HomeComponent} from './home.component';
import {AuthService} from '../../core/services/auth.service';
import {StoreService} from '../../core/services/store.service';


describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        const spyStoreService = jasmine.createSpyObj('StoreService', ['init']);
        const spyAuthService = jasmine.createSpyObj('AuthService', ['']);

        spyStoreService.init.and.returnValue('');

        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [RouterTestingModule],
            providers: [{provide: StoreService, useValue: spyStoreService},
                {provide: AuthService, useValue: spyAuthService}]

        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
