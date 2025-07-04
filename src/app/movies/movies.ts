import { Component, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movieshttp } from '../movieshttp';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { MoviesMovie } from "../movies-movie/movies-movie";
import { ButtonModule } from 'primeng/button';
import { Showshttp } from '../showshttp';
import { MoviesShows } from "../movies-shows/movies-shows";
import { MovieInterface } from '../movie-interface';
import { RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { Languages } from '../languages';


@Component({
  selector: 'app-movies',
  imports: [CarouselModule, CommonModule, MoviesMovie, ButtonModule, MoviesShows, RouterModule, PaginatorModule],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})
export class Movies implements OnInit, OnDestroy {

  // State
  selectedType: 'movies' | 'shows' = 'movies';
  selectedCategory: string = 'now_playing';
  showsCategory: string = 'airing_today';

  // Signals
  moviesData = signal<MovieInterface[]>([]);
showsData = signal<MovieInterface[]>([]);
carouselData = signal<MovieInterface[]>([]);

  carouselMovies = signal<MovieInterface[]>([]);
  movies = signal<MovieInterface[]>([]);
  shows = signal<MovieInterface[]>([]);
  searchterm = signal<string>('');
  currentPage = signal(1); // Page numbers start from 1 (not 0)
  moviesPerPage = 20;       // TMDB default page size
  totalPages = 4;
  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value.trim();
    this.searchterm.set(value);
  }

  // Subscriptions FOR DELETION
  private movieData$!: Subscription;
  private carouselData$!: Subscription;
  private showsData$!: Subscription;


  moviesCall = inject(Movieshttp);
  showsCall = inject(Showshttp);
  serviceLanguage = inject(Languages);



ngOnInit(): void {
  const lang = this.serviceLanguage.getLanguage();

  // Force initial load to ensure data appears even without signal change
  this.loadMovies(this.selectedCategory, this.currentPage(), lang);
  this.loadShows(this.showsCategory, lang);
  this.loadCarousel(lang);

  // Reactive updates when language changes
  effect(() => {
    const newLang = this.serviceLanguage.languageSignal()();
    this.currentPage.set(1);
    this.selectedCategory = 'now_playing';
    this.showsCategory = 'airing_today';
    this.loadMovies(this.selectedCategory, this.currentPage(), newLang);
    this.loadShows(this.showsCategory, newLang);
    this.loadCarousel(newLang);
  });
}
  // Function to call the http service to get movies and shows
  loadMovies(category: string, page: number = 1, language?: string): void {
    this.unsubscribeMovies();
    const lang = language ?? this.serviceLanguage.getLanguage();
    this.movieData$ = this.moviesCall.getMovies(category, page, lang).subscribe((data: any) => {
      this.movies.set(data.results || []);
    });
  }
  loadShows(category: string, language?: string): void {
    this.unsubscribeShows();
    const lang = language ?? this.serviceLanguage.getLanguage();
    this.showsData$ = this.showsCall.getShows(category, lang).subscribe((data: any) => {
      this.shows.set(data.results || []);
    });
  }
  loadCarousel(language?: string): void {
  const lang = language ?? this.serviceLanguage.getLanguage();
  this.carouselData$ = this.moviesCall.getMovies('popular', 1, lang).subscribe((data: any) => {
    this.carouselMovies.set(data.results || []);
  });
}
  // Function to change the category of movies and shows
  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.currentPage.set(1);
    this.loadMovies(category, 1);
  }
  onPageChange(event: any): void {
    const newPage = event.page + 1;  // PrimeNG is 0-based
    this.currentPage.set(newPage);
    this.loadMovies(this.selectedCategory, newPage);
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

  //pagenation



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
