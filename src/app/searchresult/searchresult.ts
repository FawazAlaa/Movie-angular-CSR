import { Component, inject, input, Signal, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import {RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { MovieInterface } from '../movie-interface';
import { Searchhttp } from '../searchhttp';

@Component({
  selector: 'app-searchresult',
  imports: [RouterModule],
  templateUrl: './searchresult.html',
  styleUrl: './searchresult.scss'
})
export class Searchresult {

  singleSearch$!:Subscription
  singleMovieSearch=inject(Searchhttp);
  readonly name=input<any>();
  singleSearch=signal<any>([]);

  ngOnInit(): void {
    const movieName = this.name();
    if (movieName !== undefined) {
      this.singleSearch$ = this.singleMovieSearch.getSearch(movieName).subscribe((data: any) => {
        this.singleSearch.set(data.results);
        console.log(movieName, data.results);
      });
    }
  }
  

}
