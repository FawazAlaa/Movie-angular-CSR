import { CommonModule } from '@angular/common';
import { Component, inject, input} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { MovieInterface } from '../movie-interface';
import { watchlistStore } from '../store/watchlistStore';

@Component({
  selector: 'app-movies-shows',
  imports: [CommonModule,RouterModule,CardModule],
  templateUrl: './movies-shows.html',
  styleUrl: './movies-shows.scss'
})
export class MoviesShows {
   seriesShow=input<MovieInterface>();
   watchListItem = inject(watchlistStore)// Assuming watchlistItem is an object, adjust type as needed

}
