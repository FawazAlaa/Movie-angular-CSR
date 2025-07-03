import { Component, inject, input, signal } from '@angular/core';
import { SingleMoviehttp } from '../single-moviehttp';
import { Subscription } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { MovieInterface } from '../movie-interface';

@Component({
  selector: 'app-single-movie',
  imports: [RouterModule,RatingModule],
  templateUrl: './single-movie.html',
  styleUrl: './single-movie.scss'
})
export class SingleMovie {
  singleData$!:Subscription
  singleMovieCall=inject(SingleMoviehttp);
  readonly id=input<number>();
  singleMovie=signal<MovieInterface>({} as MovieInterface);

  ngOnInit(): void {
    const movieId = this.id();
    if (movieId !== undefined) {
      this.singleData$ = this.singleMovieCall.getSingleMovie(movieId).subscribe((data: any) => {
        this.singleMovie.set(data);
        console.log(movieId, data);
      });
    }
  }
get starRating(): number {
  return Math.ceil(this.singleMovie().vote_average/ 2);
}


  //   data$!:Subscription;
  //  private route = inject(ActivatedRoute);
  //  quantity=signal<number>(1);

  // singleProduct=signal<any>({})
  // private singleProductCall=inject(Singlehttp);

}
