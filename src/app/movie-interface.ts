export interface Genre {
    id: number;
    name: string;
}
export interface ProductionCompany {
    id: number;     
    logo_path: string | null;
    name: string;
    origin_country: string;
}


export interface MovieInterface {
    adult: boolean;
    backdrop_path: string;
    genres: Genre[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    runtime?: number; 
    production_companies?: ProductionCompany[];
    // For TV shows
    first_air_date?: string;
    episode_run_time?: number[];
    last_air_date?: string;
    number_of_episodes?: number;
    number_of_seasons?: number;
    name?: string;
}

// https://image.tmdb.org/t/p/w500/



// ***************************************************

// adult
// : 
// false
// backdrop_path
// : 
// "/6jGVOu5NvnmSKh28ByWAJrTOEH2.jpg"
// created_by
// : 
// [{…}]
// episode_run_time
// : 
// (2) [45, 41]
// first_air_date
// : 
// "2014-02-17"
// genres
// : 
// (2) [{…}, {…}]
// homepage
// : 
// "http://www.nbc.com/the-tonight-show"
// id
// : 
// 59941
// in_production
// : 
// true
// languages
// : 
// ['en']
// last_air_date
// : 
// "2025-06-26"
// last_episode_to_air
// : 
// {id: 6324211, name: 'Episode #12.133', overview: '', vote_average: 0, vote_count: 0, …}
// name
// : 
// "The Tonight Show Starring Jimmy Fallon"
// networks
// : 
// [{…}]
// next_episode_to_air
// : 
// {id: 6324222, name: 'Episode #12.134', overview: '', vote_average: 0, vote_count: 0, …}
// number_of_episodes
// : 
// 1579
// number_of_seasons
// : 
// 12
// origin_country
// : 
// ['US']
// original_language
// : 
// "en"
// original_name
// : 
// "The Tonight Show Starring Jimmy Fallon"
// overview
// : 
// "After Jay Leno's second retirement from the program, Jimmy Fallon stepped in as his permanent replacement. After 42 years in Los Angeles the program was brought back to New York."
// popularity
// : 
// 631.9634
// poster_path
// : 
// "/if7ECoH4xaYw5S8gomNIEmtwTxP.jpg"
// production_companies
// : 
// (4) [{…}, {…}, {…}, {…}]
// production_countries
// : 
// [{…}]
// seasons
// : 
// (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// spoken_languages
// : 
// [{…}]
// status
// : 
// "Returning Series"
// tagline
// : 
// "Tonight's just getting started."
// type
// : 
// "Talk Show"
// vote_average
// : 
// 5.86
// vote_count
// : 
// 342
// [[Prototype]]
// : 
// Object
// ﻿


