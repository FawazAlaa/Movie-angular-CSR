import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movieshttp } from '../movieshttp';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { MoviesMovie } from "../movies-movie/movies-movie";
import { ButtonModule } from 'primeng/button';
import { Showshttp } from '../showshttp';
import { MoviesShows } from "../movies-shows/movies-shows";
import { MovieInterface } from '../movie-interface';



@Component({
  selector: 'app-movies',
  imports: [CarouselModule, CommonModule, MoviesMovie, ButtonModule, MoviesShows],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})
export class Movies implements OnInit, OnDestroy {

  // State
  selectedType: 'movies' | 'shows' = 'movies';
  selectedCategory: string = 'now_playing';
  showsCategory: string = 'airing_today';

  // Signals
  carouselMovies = signal<MovieInterface[]>([]);
  movies = signal<MovieInterface[]>([]);
  shows = signal<MovieInterface[]>([]);

  // Subscriptions FOR DELETION
  private movieData$!: Subscription;
  private carouselData$!: Subscription;
  private showsData$!: Subscription;


  moviesCall = inject(Movieshttp);
  showsCall = inject(Showshttp);


  ngOnInit(): void {
    // Load static carousel (popular movies)
    this.carouselData$ = this.moviesCall.getMovies('popular').subscribe((data: any) => {
      this.carouselMovies.set(data.results || []);
    });

    // Load initial movie category/shows category
    this.loadMovies(this.selectedCategory);
    this.loadShows(this.showsCategory)
  }
  // Function to call the http service to get movies and shows
  loadMovies(category: string): void {
    this.unsubscribeMovies(); // cleanup old if any
    this.movieData$ = this.moviesCall.getMovies(category).subscribe((data: any) => {
    this.movies.set(data.results || []);
    });
  }
  loadShows(category: string): void {
    this.unsubscribeShows(); // cleanup old if any

    this.showsData$ = this.showsCall.getShows(category).subscribe((data: any) => {
      this.shows.set(data.results || []);
    });
  }
  // Function to change the category of movies and shows
  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.loadMovies(category);
  }
  onshowCategoryChange(category: string): void {
    this.showsCategory = category;
    this.loadShows(category);
  }

  private unsubscribeMovies(): void {
    if (this.movieData$) {
      this.movieData$.unsubscribe();
    }
  }

  private unsubscribeShows(): void {
    if (this.showsData$) {
      this.showsData$.unsubscribe();
    }
  }


  // Destroy both
  ngOnDestroy(): void {
    if (this.carouselData$) {
      this.carouselData$.unsubscribe();
    }
    if (this.movieData$) {
      this.movieData$.unsubscribe();
    }
    if (this.showsData$) {
      this.showsData$.unsubscribe();
    }
  }
}
