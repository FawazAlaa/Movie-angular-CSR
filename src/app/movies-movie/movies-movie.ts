import { CommonModule } from '@angular/common';
import { Component, input} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { MovieInterface } from '../movie-interface';
@Component({
  selector: 'app-movies-movie',
  imports: [CommonModule,RouterModule,CardModule],
  templateUrl: './movies-movie.html',
  styleUrl: './movies-movie.scss'
})
export class MoviesMovie {
  movieShow=input<MovieInterface>();
}
