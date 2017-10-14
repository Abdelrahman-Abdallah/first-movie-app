import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class GetPopularmovies {
  constructor(private http: Http) {
  }
  getpopular() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=8cf6d2678fcf66ce0285a94d22d1542c&language=en-US&page=1');
  }
}
