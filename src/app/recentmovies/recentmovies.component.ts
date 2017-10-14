import {Component, OnInit} from '@angular/core';
import {GetmoviesService} from '../getmovies.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-recentmovies',
  templateUrl: './recentmovies.component.html',
  styleUrls: ['./recentmovies.component.css']
})
export class RecentmoviesComponent implements OnInit {

  response: any = [];
  constructor(private getmovies: GetmoviesService) {}

  ngOnInit() {
    this.getmovies.getmovies().subscribe((res: Response) => {
        const data = res.json();
        //console.log(data);
        this.response = data.results;

        console.log(this.response);

      }
      , ( err ) => {console.log(err) ; } );
  }
  getUrl(data) {
    return "url('https://image.tmdb.org/t/p/w500/"+ data +"')";
  }

}
