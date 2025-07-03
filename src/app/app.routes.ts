import { Routes } from '@angular/router';


export const routes: Routes = [
     { path: '', loadComponent: () => import('./movies/movies').then(m => m.Movies),pathMatch: 'full' },
    { path: 'single-movie/:id', loadComponent: () => import('./single-movie/single-movie').then(m => m.SingleMovie),pathMatch: 'full'  },
    {path: 'single-show/:id', loadComponent: () => import('./single-show/single-show').then(m => m.SingleShow),pathMatch: 'full'  },
];
