import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Movieshttp {

  constructor() { }
  // This service can be used to make HTTP requests related to movies
  private httpcall=inject(HttpClient);

  getMovies(type: string = 'popular') {
    return this.httpcall.get(`https://api.themoviedb.org/3/movie/${type}?api_key=YOUR_API_KEY&language=en-US&page=1`);
  }

}
