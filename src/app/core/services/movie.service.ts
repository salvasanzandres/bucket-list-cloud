import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {Movie} from '../models/user';
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private apiKey = environment.omdbApiKey;
    private omdbApiUrl = 'https://www.omdbapi.com/';

    constructor(private http: HttpClient) {
    }

    getMovies(name: string): Observable<Movie[]> {
        return this.http.get<any>(this.omdbApiUrl + '?apikey=' + this.apiKey + '&s=' + name).pipe(
            map(movies => {
                return movies.Search ? movies.Search.map(movie => this.buildMoviefromPayload(movie)) : [];
            }));
    }

    getMovie(name: string): Observable<Movie> {
        return this.http.get<any>(this.omdbApiUrl + '?apikey=' + this.apiKey + '&t=' + name).pipe(
            map(movie => this.buildMoviefromPayload(movie)));
    }

    buildMoviefromPayload(movie: any): Movie {
        return new Movie(movie.Title, movie.Plot, movie.imdbRating, movie.Actors,
            movie.Director, movie.Poster, movie.Year, movie.Runtime, movie.Genre, movie.Country, '',
            false, undefined);
    }
}
