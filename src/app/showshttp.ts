import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { Languages } from './languages';

@Injectable({
  providedIn: 'root'
})
export class Showshttp {


  private httpcall = inject(HttpClient);
  private languageService = inject(Languages);

  getShows(type: string = 'airing_today', language?: string) {
    const lang = language ?? this.languageService.getLanguage();
    return this.httpcall.get(`https://api.themoviedb.org/3/tv/${type}?language=${lang}&page=1`);
  }
}
