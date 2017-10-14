import {Component, Input, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import { MovieDataService } from './movie-data.service';

@Component({
  selector: 'app-movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.css']
})
export class MovieDataComponent implements OnInit {
  @Input() movieid: string;
  moviedata: any;
  constructor(private movieDataSevice: MovieDataService) { }

  ngOnInit() {
    this.movieDataSevice.getdata(this.movieid).subscribe(
      (res: Response) => {
        this.moviedata = res.json();
        console.log(this.moviedata);
      }, ( err ) => { console.log(err) ; }
    );
  }
  getmoviebackground(e) {
    const x = 'https://image.tmdb.org/t/p/original' + e;
    console.log(x);
    return x;
  }
  makerate(e) {
     const arr = [];
    for ( let i = 0 ; i < Math.floor(e); i++){
      arr.push(i);
    }
    return arr;
  }

}
