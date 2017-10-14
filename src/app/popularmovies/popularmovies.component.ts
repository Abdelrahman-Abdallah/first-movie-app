import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import  { GetPopularmovies } from './getpopularmovies.service';

@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.css']
})
export class PopularmoviesComponent implements OnInit {
  response: any = [];
  constructor(private getmovies: GetPopularmovies) {}

  ngOnInit() {
    this.getmovies.getpopular().subscribe((res: Response) => {
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
