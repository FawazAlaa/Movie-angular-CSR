import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Movies } from "./movies/movies";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Movies],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'movie-angular';
}
