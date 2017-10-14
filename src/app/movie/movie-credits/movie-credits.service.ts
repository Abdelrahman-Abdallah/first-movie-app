import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class MovieCreditsService {
  constructor(private http: Http ) {

  }
  getCredits(movieid) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieid + '/credits?api_key=??')
      .map((res: Response) => {
      const data = res.json();
      return data.cast;
      })
      ;
  }
}
