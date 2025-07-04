import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Movies } from "./movies/movies";
import { Languages } from './languages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'movie-angular';
   private languageService = inject(Languages);

  constructor() {
    effect(() => {
      const lang = this.languageService.languageSignal()();
      document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    });
  }
}
