import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleShowhttp {
 private singlehttp=inject(HttpClient)
  getSingleShow(id:number) {
    return this.singlehttp.get(`https://api.themoviedb.org/3/tv/${id}`);
  }
      getSingleShowReviews(id:number) {
    return this.singlehttp.get(`https://api.themoviedb.org/3/tv/${id}/reviews`);
  }
    getSingleShowRecommend(id:number) {
    return this.singlehttp.get(`https://api.themoviedb.org/3/tv/${id}/recommendations`);
  }
}
