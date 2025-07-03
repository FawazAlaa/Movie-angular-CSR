import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Showshttp {

  constructor() { }

  private httpcall = inject(HttpClient);
  getShows(type: string = 'airing_today') {
    return this.httpcall.get(`https://api.themoviedb.org/3/tv/${type}?language=en-US&page=1`);   
  }
}
