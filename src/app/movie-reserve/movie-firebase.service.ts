import { Http , Response} from '@angular/http';
import { Injectable} from '@angular/core';

@Injectable()
export class MovieFirebaseService {
  constructor(private  http: Http) {
  }
  getData (movie_id , cinema_id) {
   return this.http.get('' + cinema_id + '/' + movie_id + '.json');
  }
  putData(movie_id , cinema_id, seats) {
    console.log(movie_id, cinema_id , seats) ;
   return this.http.put('' + cinema_id + '/' + movie_id + '.json', seats);

  }
}
