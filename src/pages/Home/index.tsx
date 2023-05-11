import SearchBar from '../../components/SearchBar';
import {MovieDetail} from '../../utils/types';
import {useContext, useEffect} from 'react';
import {MovieContext} from '../../context/MovieContext';
import MovieCard from '../../components/MovieCard';
import GridWithPagination from '../../components/GridWithPagination';
import {ENumberOfItems, ECardTypes, EMovieTypes} from '../../utils/enums';
import Loading from '../../components/Loading';
import {Typography} from '@mui/material';
import AlertToast from '../../components/AlertToast';
import Filter from '../../components/Filter';

function HomePage() {
  const { filteredMovies, movies, isLoading, setSelectedMovie} = useContext(MovieContext);
  useEffect(() => {
    setSelectedMovie && setSelectedMovie(undefined)
  }, []);

  return (
    <>
      <div className='home'>
        <p className='home-title'>Movie Search</p>
        <SearchBar context={MovieContext}/>
        {isLoading && <Loading/>}
        <AlertToast context={MovieContext}/>
        {(filteredMovies && movies?.length > 0) &&
          <Filter title='Filter by type' context={MovieContext}
            items={Object.values(EMovieTypes).map(item => ({label: item, value: item}))}/>}
        {filteredMovies && filteredMovies?.length > 0 ? (
          <>
            <GridWithPagination
              items={filteredMovies.map((movie:MovieDetail ) => (
                <MovieCard movie={movie} cardType={ECardTypes.movie} key={movie.imdbID}/>
              ))}
              rowSpacing={6}
              columnSpacing={{xs: 2, sm: 3, md: 4}}
              numberOfItems={ENumberOfItems.three}/>
          </>
        ) : (
          <div className="home-description">
            <Typography variant="subtitle1" component="h2">
              {!movies?.length ? 'Enter a movie title, i.e Interstellar, and press the search icon' : 'No items found. Please try another filter'}
            </Typography>
          </div>
        )}
      </div>
    </>
  )
}

export default HomePage;
