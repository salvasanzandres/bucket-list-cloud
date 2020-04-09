import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, CollectionReference} from '@angular/fire/firestore';

import {Movie, User} from '../models/user';
import {QueryFn} from '@angular/fire/firestore/interfaces';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class StoreService {
    private userDocumentRef: AngularFirestoreDocument<User>;
    private moviesCollectionRef: AngularFirestoreCollection<Movie>;
    public user$: Observable<User>;
    public movies$: Observable<Movie[]>;

    constructor(private angularFirestore: AngularFirestore) {
    }

    init(uid: string) {
        this.userDocumentRef = this.getUser(uid);
        this.moviesCollectionRef = this.getMovies();

        this.user$ = this.userDocumentRef.valueChanges();
        this.movies$ = this.moviesCollectionRef.snapshotChanges().pipe(map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as Movie;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        }));
    }

    async createUser(user: User) {
        const result = await this.angularFirestore.collection('users').doc(user.id).set(user);
    }

    getUser(id): AngularFirestoreDocument<User> {
        return this.angularFirestore.collection('users').doc(id);
    }

    async addMovie(movie: Movie) {
        const response = await this.userDocumentRef.collection('movies').add({
            name: movie.name, description: movie.description, stars: movie.stars, actors: movie.actors,
            director: movie.director, image: movie.image, year: movie.year, runtime: movie.runtime,
            genre: movie.genre, country: movie.country, comment: movie.comment, like: movie.like});
    }

    async removeMovie(movie: Movie) {
        const response = await this.userDocumentRef.collection('movies').doc(movie.id).delete();
    }

    async updateMovie(movie: Movie) {
        const response = await this.userDocumentRef.collection('movies').doc(movie.id).set(movie);
    }

    getMovies(): AngularFirestoreCollection<Movie> {
        return this.userDocumentRef.collection('movies');
    }
}
