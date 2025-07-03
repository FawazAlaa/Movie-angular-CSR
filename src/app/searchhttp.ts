import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Searchhttp {
 // This service can be used to make HTTP requests related to movies
  private httpcall=inject(HttpClient);

  getSearch(MovieName: string) {
    return this.httpcall.get(`https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=${MovieName}`); // Replace YOUR_API_KEY with your actual API key
  }
}
