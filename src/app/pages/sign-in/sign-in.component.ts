import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../core/services/auth.service';
import {User} from '../../core/models/user';
import {StoreService} from '../../core/services/store.service';
import {Message, SnackbarService} from '../../core/services/snackbar.service';


@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    public loginForm: FormGroup;
    public isSignUp = false;

    constructor(private authService: AuthService,
                private storeService: StoreService,
                private router: Router,
                private snackbarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            name: new FormControl(''),
            email: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    userSignIn() {
        this.authService.signInUser(this.email.value, this.password.value).then(value => {
            this.snackbarService.publishMessage(new Message('Welcome!'));
            this.router.navigate(['home']);
        }).catch(err => {
            this.snackbarService.publishMessage(new Message(err.message));
        });
    }

    userSignUp() {
        this.authService.signUpUser(this.email.value, this.password.value).then(value => {
            this.createUser();
            this.snackbarService.publishMessage(new Message('Welcome!'));
        }).catch(err => {
            this.snackbarService.publishMessage(new Message(err.message));
        });
    }

    createUser() {
        const newUser: User = {name: this.name.value, email: this.email.value};
        newUser.id = this.authService.uid;
        this.storeService.createUser(newUser).then(response => {
            this.router.navigate(['home']);
        }).catch(err => {
            this.snackbarService.publishMessage(new Message(err.message));
        });
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }

    get name() {
        return this.loginForm.get('name');
    }

}
