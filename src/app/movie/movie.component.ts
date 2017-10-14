import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from './movie-data/movie-data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id= '';
  mainmovie;
  constructor(private route: ActivatedRoute, private getmovie: MovieDataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getmovie.getdata(this.id).subscribe((res: Response) => {
      const data = res.json();
        this.mainmovie = data;
        console.log(this.mainmovie);
    });
  }

  getUrl(data) {
    return "url('https://image.tmdb.org/t/p/w500/"+ data +"')";
  }
}
