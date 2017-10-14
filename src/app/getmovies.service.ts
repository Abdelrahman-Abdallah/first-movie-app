import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class GetmoviesService {

  constructor(private http: Http) { }
  getmovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8cf6d2678fcf66ce0285a94d22d1542c&language=en-US&page=1');
  }

}
