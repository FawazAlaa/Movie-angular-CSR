import { Component, inject, input, signal } from '@angular/core';
import { SingleMoviehttp } from '../single-moviehttp';
import { Subscription } from 'rxjs';
import {RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { MovieInterface } from '../movie-interface';
import { watchlistStore } from '../store/watchlistStore';

@Component({
  selector: 'app-single-movie',
  imports: [RouterModule,RatingModule,CommonModule],
  templateUrl: './single-movie.html',
  styleUrl: './single-movie.scss'
})
export class SingleMovie {
  singleData$!:Subscription
  singleMovieCall=inject(SingleMoviehttp);
  readonly id=input<number>();
  singleMovie=signal<MovieInterface>({} as MovieInterface);
  singleMovieReviews=signal<any>({})
  singleMovieReccomend=signal<any>({})

  watchListItem = inject(watchlistStore);

  ngOnInit(): void {
    const movieId = this.id();
    if (movieId !== undefined) {
      this.singleData$ = this.singleMovieCall.getSingleMovie(movieId).subscribe((data: any) => {
        this.singleMovie.set(data);
        console.log(movieId, data);
      });
    
  
      this.singleData$ = this.singleMovieCall.getSingleMovieReviews(movieId).subscribe((data: any) => {
        this.singleMovieReviews.set(data);
        console.log(movieId, data);
      });
    
   
      this.singleData$ = this.singleMovieCall.getSingleMovieRecommend(movieId).subscribe((data: any) => {
        this.singleMovieReccomend.set(data);
        console.log(movieId, data);
      });
    }
    

  }

  //   data$!:Subscription;
  //  private route = inject(ActivatedRoute);
  //  quantity=signal<number>(1);

  // singleProduct=signal<any>({})
  // private singleProductCall=inject(Singlehttp);

}
