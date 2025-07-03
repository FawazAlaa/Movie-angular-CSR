import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleMoviehttp {

 private singlehttp=inject(HttpClient)
  getSingleMovie(id:number) {
    return this.singlehttp.get(`https://api.themoviedb.org/3/movie/${id}`);
  }
}
