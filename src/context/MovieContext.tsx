import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react';
import axios from 'axios';
import {MovieDetail} from '../utils/types';

interface IMovieContext {
  movies?: Array<MovieDetail>
  fetchMovies?: (searchValue: string) => Promise<void>
  filteredMovies?: Array<MovieDetail>
  setFilteredMovies?: Dispatch<SetStateAction<Array<MovieDetail>>>
  showDetail?: (id: string) => Promise<void>
  applyFilter?: (filterParam: string) => void
  selectedMovie?: MovieDetail
  setSelectedMovie?: Dispatch<SetStateAction<MovieDetail | undefined>>
  isLoading?: boolean
  alert?: string
  setAlert?: Dispatch<SetStateAction<string>>
  searchTerm?: string
  setSearchTerm?: Dispatch<SetStateAction<string>>
}

const defaultState = {
  movies: [],
  filteredMovies: [],
  isLoading: false,
  alert: '',
};

export const MovieContext = createContext<IMovieContext>(defaultState);

const API_KEY= process.env.OMDB_API_KEY;
const URL=`https://www.omdbapi.com/?apikey=${API_KEY}`

interface MovieAppProviderProp {
  children: ReactNode
}

const MovieAppProvider:React.FC<MovieAppProviderProp> = ({children}) => {
  const [movies, setMovies] = useState<MovieDetail[]>([])
  const [filteredMovies, setFilteredMovies] = useState<MovieDetail[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMovie, setSelectedMovie] = useState<MovieDetail | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState('')


  const fetchMovies = async (searchValue: string) => {
    if(!searchValue) return
    setIsLoading(true)
    const response = await axios(`${URL}&s=${searchValue}`).finally(() => setIsLoading(false));
    const data = response.data
    data.Error && setAlert(data.Error)
    setMovies(data.Search)
    setFilteredMovies(data.Search)
  };

  const applyFilter = (filterParam: string) => {
    if (!filterParam) return
    filterParam === 'all' && setFilteredMovies(movies)
    filterParam !== 'all' && movies.length > 0 && setFilteredMovies(movies?.filter(movie => movie.Type.includes(filterParam)))
  }

  const showDetail = async (id:string) => {
    if(!id) return
    setIsLoading(true)
    setSelectedMovie(undefined)
    const response = await axios(`${URL}&i=${id}`)
    const data = response.data
    data.Error && setAlert(data.Error)
    setSelectedMovie(data)
    setIsLoading(false)
  };

  return (
    <MovieContext.Provider
      value={{
        fetchMovies,
        movies,
        filteredMovies,
        showDetail,
        applyFilter,
        searchTerm,
        setSearchTerm,
        selectedMovie,
        setSelectedMovie,
        isLoading,
        alert,
        setAlert,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieAppProvider;
