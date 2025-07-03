import { CommonModule } from '@angular/common';
import { Component, inject, input} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { MovieInterface } from '../movie-interface';
import { watchlistStore } from '../store/watchlistStore';


@Component({
  selector: 'app-movies-movie',
  imports: [CommonModule,RouterModule,CardModule],
  templateUrl: './movies-movie.html',
  styleUrl: './movies-movie.scss'
})
export class MoviesMovie {
  movieShow=input<MovieInterface>();
  watchListItem = inject(watchlistStore);
}
