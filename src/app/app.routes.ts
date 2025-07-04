import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', loadComponent: () => import('./movies/movies').then(m => m.Movies), pathMatch: 'full' },
    { path: 'single-movie/:id', loadComponent: () => import('./single-movie/single-movie').then(m => m.SingleMovie), pathMatch: 'full' },
    { path: 'single-show/:id', loadComponent: () => import('./single-show/single-show').then(m => m.SingleShow), pathMatch: 'full' },
    { path: 'watchlist', loadComponent: () => import('./watchlist/watchlist').then(m => m.Watchlist), pathMatch: 'full' },
    { path: 'searchresult/:name', loadComponent: () => import('./searchresult/searchresult').then(m => m.Searchresult), pathMatch: 'full' },
    { path: '**', loadComponent: () => import('./not-found/not-found').then(m => m.NotFound) }
];
