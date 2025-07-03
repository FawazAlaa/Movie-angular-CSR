import { Component, inject } from '@angular/core';
import { watchlistStore } from '../store/watchlistStore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watchlist',
  imports: [CommonModule],
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.scss'
})
export class Watchlist {
  watchListItem=inject(watchlistStore);
}
