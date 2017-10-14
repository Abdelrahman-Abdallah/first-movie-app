import {Component, Input, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import {MovieCreditsService} from './movie-credits.service';

@Component({
  selector: 'app-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.css']
})
export class MovieCreditsComponent implements OnInit {
  @Input() movieid: string;
  moviecredit: any;
  constructor(private Moviecreditservice: MovieCreditsService) {}
  ngOnInit() {
    this.Moviecreditservice.getCredits(this.movieid).subscribe(
      /*(res: Response) => {
        this.moviecredit = res.json().cast;
        console.log(this.moviecredit);
      },
      (err) => {
        console.log('error in getting movie credits', err );
      }*/
      (res) => {
        this.moviecredit = res;
        console.log(this.moviecredit);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
