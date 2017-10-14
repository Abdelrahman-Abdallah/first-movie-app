import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export  class MovieDataService {
  constructor( private http: Http) {
  }
  getdata(movieid) {
    return this.http.get('https://api.themoviedb.org/3/movie/' +  movieid + '?api_key=???&language=en-US');
  }
}
