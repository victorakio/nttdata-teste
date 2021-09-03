export interface Movie {
  Title: string;
  Plot: string;
  Released: string;
  Rated: string;
  Runtime: string;
  Actors: string;
  Poster: string;
  imdbRating: string;
}

export interface IAppState {
  movies: Movie[];
}
