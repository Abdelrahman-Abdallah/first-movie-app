import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Routes, Router, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { RecentmoviesComponent } from './recentmovies/recentmovies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieVideosComponent } from './movie/movie-videos/movie-videos.component';
import { HeaderComponent } from './header/header.component';
import { MovieCreditsComponent } from './movie/movie-credits/movie-credits.component';
import { MovieDataComponent } from './movie/movie-data/movie-data.component';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component';


import { SafePipe } from './movie/movie-videos/pipe';


import {GetmoviesService} from './getmovies.service';
import { GetPopularmovies } from './popularmovies/getpopularmovies.service';
import { MovieDataService } from './movie/movie-data/movie-data.service';
import { MovieCreditsService } from './movie/movie-credits/movie-credits.service';
import { MovieVideosService } from './movie/movie-videos/movie-videos.service';
import { MovieReserveComponent } from './movie-reserve/movie-reserve.component';
import { MovieFirebaseService } from './movie-reserve/movie-firebase.service';
import {SeatclickDirective} from './movie-reserve/seatclick.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { RecervepartComponent } from './movie/recervepart/recervepart.component';

// New imports to update based on AngularFire2 version 4

const approute: Routes = [
  { path: '' , component: RecentmoviesComponent },
  { path: 'popular' , component: PopularmoviesComponent },
  { path: 'recent' , component: RecentmoviesComponent },
  { path: 'movie/:id', component: MovieComponent},
  { path: 'reserve/:cinemaid/:movieid', component: MovieReserveComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RecentmoviesComponent,
    MovieComponent,
    MovieVideosComponent,
    HeaderComponent,
    MovieCreditsComponent,
    MovieDataComponent,
    PopularmoviesComponent,
    MovieReserveComponent,
    SafePipe,
    SeatclickDirective,
    SpinnerComponent,
    RecervepartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( approute ),
  ],
  providers: [GetmoviesService, GetPopularmovies, MovieDataService , MovieCreditsService , MovieVideosService, MovieFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
