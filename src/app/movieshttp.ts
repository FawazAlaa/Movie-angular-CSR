import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, numberAttribute } from '@angular/core';
import { Languages } from './languages';


@Injectable({
  providedIn: 'root'
})
export class Movieshttp {

  constructor() { }
  // This service can be used to make HTTP requests related to movies
  private httpcall=inject(HttpClient);
    private languageService = inject(Languages);



  getMovies(type: string = 'popular', pageNumber: number = 1, language?: string ) {
    const lang = language ?? this.languageService.getLanguage();
    return this.httpcall.get(`https://api.themoviedb.org/3/movie/${type}?language=${lang}&page=${pageNumber}`);
  }


}
