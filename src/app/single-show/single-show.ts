import { Component, inject, input, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { MovieInterface } from '../movie-interface';
import { SingleShowhttp } from '../single-showhttp';
import { watchlistStore } from '../store/watchlistStore';

@Component({
  selector: 'app-single-show',
  imports: [RouterModule, RatingModule, CommonModule],
  templateUrl: './single-show.html',
  styleUrl: './single-show.scss'
})
export class SingleShow {

   singleData$!:Subscription
  singleShowCall=inject(SingleShowhttp);
  readonly id=input<number>();
  singleShow=signal<MovieInterface>({} as MovieInterface);
    watchListItem = inject(watchlistStore);
  

  ngOnInit(): void {
    const movieId = this.id();
    if (movieId !== undefined) {
      this.singleData$ = this.singleShowCall.getSingleShow(movieId).subscribe((data: any) => {
        this.singleShow.set(data);
        console.log(movieId, data);
      });
    }
  }
get starRating(): number {
  return Math.ceil(this.singleShow().vote_average/ 2);

}
}
