import {EMovieTypes} from './enums';

export type MovieType = {
  Poster: string
  Title: string
  Type: EMovieTypes
  Year: string
  imdbID: string
}
export type MovieRating = {
  Source: string
  Value: string
}
export type MovieDetail = {
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore:string
  Plot:string
  Poster:string
  Production:string
  Rated:string
  Ratings:Array<MovieRating>
  Released:string
  Response:string
  Runtime:string
  Title:string
  Type:EMovieTypes
  Website:string
  Writer:string
  Year:string
  imdbID:string
  imdbRating:string
  imdbVotes:string
}
