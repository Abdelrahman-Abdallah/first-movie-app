import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import { ActivatedRoute} from '@angular/router';
import { MovieFirebaseService } from './movie-firebase.service';

@Component({
  selector: 'app-movie-reserve',
  templateUrl: './movie-reserve.component.html',
  styleUrls: ['./movie-reserve.component.css']
})
export class MovieReserveComponent implements OnInit {
    movieid: string;
    cinemaid: string;
    movieseats = [];
    arr;
    clickedseats = [];
    allseats = [];
    disable = true;
  showloader= false;
  constructor(private route: ActivatedRoute, private firebase: MovieFirebaseService) { }

  ngOnInit() {
    this.movieid = this.route.snapshot.params['movieid'];
    this.cinemaid = this.route.snapshot.params['cinemaid'];
    console.log(this.route.snapshot.params);

    this.arr = new Array(144);
    console.log(this.arr);
    this.showloader= true;

    this.firebase.getData(this.movieid, this.cinemaid).subscribe((res: Response) => {
      const data = res.json();
      console.log(data);
      this.movieseats = data;
      this.showloader = false;
    });

  }
/* Send the data of the received charis to the firebase*/
  senddata () {
    console.log('getted movied seats', this.movieseats);
    console.log('the cilicekd seats', this.clickedseats);

      for (let i = 0; i < this.clickedseats.length; i++) {
        this.allseats.push(this.clickedseats[i]);
      }
      if(this.movieseats !== null) {
        for (let i = 0; i < this.movieseats.length; i++) {
          this.allseats.push(this.movieseats[i]);
        }
      }

    console.log(this.allseats);
    this.showloader = true;
    this.firebase.putData(this.movieid , this.cinemaid , this.allseats).subscribe((res: Response) => {
      this.movieseats = this.allseats;
      console.log(res.json());
      this.showloader = false;
    });
  }
  printdata() {
    console.log(this.arr);
    console.log(this.movieseats);
  }
  log(i) {
    console.log(i);
    this.clickedseats.push(i);
    console.log(this.clickedseats);
    // console.log("button clicked");
    // console.log(event);
    // //this.clickedseats.push(event.target.id);
    // console.log(this.clickedseats);
  }
  disabled() {
    this.disable = ! this.disable;
    return this.disable;
  }
  checkinarray(i) {

      if ( this.movieseats !== null && this.movieseats.indexOf(i) !== -1) {
        return 'forbidden';
      }
  }
  disablefun(i) {

      if ( this.movieseats !== null && this.movieseats.indexOf(i) !== -1) {
        return true;
      }
  }
}
