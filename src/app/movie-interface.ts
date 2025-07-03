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
    
}

// https://image.tmdb.org/t/p/w500/


// production_companies
// : 
// Array(3)
// 0
// : 
// {id: 4, logo_path: '/gz66EfNoYPqHTYI4q9UEN4CbHRc.png', name: 'Paramount Pictures', origin_country: 'US'}
// 1
// : 
// {id: 82819, logo_path: '/gXfFl9pRPaoaq14jybEn1pHeldr.png', name: 'Skydance Media', origin_country: 'US'}
// 2
// : 
// {id: 21777, logo_path: null, name: 'TC Productions', origin_country: 'US'}







// {adult: false, backdrop_path: '/3SkOJ7xyzn2okRZLlY6rs6Ohmtv.jpg', belongs_to_collection: null, budget: 0, genres: Array(2), …}
// adult
// : 
// false
// backdrop_path
// : 
// "/3SkOJ7xyzn2okRZLlY6rs6Ohmtv.jpg"
// belongs_to_collection
// : 
// null
// budget
// : 
// 0
// genres
// : 
// (2) [{…}, {…}]
// homepage
// : 
// "https://watch.amazon.com/detail?gti=amzn1.dv.gti.cbb2a850-b50e-4e36-8268-18db32715267&territory=US&ref_=share_ios_movie&r=web"
// id
// : 
// 1470736
// imdb_id
// : 
// "tt36749443"
// origin_country
// : 
// ['US']
// original_language
// : 
// "en"
// original_title
// : 
// "Open"
// overview
// : 
// "The perfect summer turns into a blood-soaked nightmare as counselors at an isolated camp are hunted by a killer and the truth behind the murders is darker than anyone imagined. If the killer doesn't get you, the drama definitely will."
// popularity
// : 
// 92.3595
// poster_path
// : 
// "/A7TXvimVRgGiKsviUopqPLr3fY1.jpg"
// production_companies
// : 
// [{…}]
// production_countries
// : 
// [{…}]
// release_date
// : 
// "2025-06-14"
// revenue
// : 
// 0
// runtime
// : 
// 64
// spoken_languages
// : 
// [{…}]
// status
// : 
// "Released"
// tagline
// : 
// "Camp Greenwich: Great pay, hot counselors, and a summer you’ll never forget… if you survive."
// title
// : 
// "Open"
// video
// : 
// false
// vote_average
// : 
// 6.5
// vote_count
// : 
// 2





