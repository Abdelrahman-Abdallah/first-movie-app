import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class MovieVideosService {
  constructor(private http: Http) {}
  GetMovieVideos(movieid) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieid + '/videos?api_key=??&language=en-US');
  }
}
