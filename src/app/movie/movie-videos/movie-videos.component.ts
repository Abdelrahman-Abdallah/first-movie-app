import { Component, OnInit , Input } from '@angular/core';
import { MovieVideosService} from './movie-videos.service';
import { Response } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import set = Reflect.set;




@Component({
  selector: 'app-movie-videos',
  templateUrl: './movie-videos.component.html',
  styleUrls: ['./movie-videos.component.css']
})
export class MovieVideosComponent implements OnInit {
  @Input() movieid: string;
  movievidos: any;
  movielength:number;
  filtermovie= [];
  constructor(private MovieVidoesService: MovieVideosService) { }

  ngOnInit() {
    this.MovieVidoesService.GetMovieVideos(this.movieid).subscribe(
      (res: Response) => {
        this.movievidos = res.json().results;
        console.log('movievidoes', this.movievidos);
        this.movielength = this.movievidos.length;
        for (let i = 0 ; i < this.movielength &&  i < 3; i++){
            this.filtermovie.push(this.movievidos[i].key);
        }
        console.log(this.filtermovie );
      },
      (err) => { console.log('problem in feteching movie vidoes ', err ); }
    );
  }

  /*getvideourl(key) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key);
  }*/


}
