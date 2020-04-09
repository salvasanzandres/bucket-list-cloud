import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData: any;

    constructor(public angularFireAuth: AngularFireAuth, private router: Router) {
        this.angularFireAuth.authState.subscribe(user => {
            this.setUserData(user);
        });
    }

    async signUpUser(email: string, password: string) {
        const result = await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
        this.setUserData(result.user);
    }

    async signInUser(email: string, password: string): Promise<any> {
        const result = await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
        this.setUserData(result.user);
    }

    async signOutUser() {
        const result = await this.angularFireAuth.auth.signOut();
        this.setUserData(null);
    }

    async forgotPassword(email: string) {
        const result = await this.angularFireAuth.auth.sendPasswordResetEmail(email);
    }

    isUserSignedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null);
    }

    isUserSignedInAsObs$(): Observable<boolean> {
        return this.angularFireAuth.authState.pipe(map(value => value != null));
    }

    private setUserData(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
    }

    getUserFromLocalStorage() {
        return JSON.parse(localStorage.getItem('user'));
    }

    get uid(): string {
        return this.getUserFromLocalStorage().uid;
    }
}
