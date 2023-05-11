import {useContext, useEffect} from 'react';
import {MovieContext} from '../../context/MovieContext';
import Loading from '../../components/Loading';
import AlertToast from '../../components/AlertToast';
import MovieCard from '../../components/MovieCard';
import {ECardTypes} from '../../utils/enums';
import {Button, Typography} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';

function DetailedPage() {
  const { selectedMovie, isLoading, showDetail } = useContext(MovieContext);
  const location= useLocation()

  useEffect(() => {
    showDetail && showDetail(location?.pathname?.split('/')[2])
  },[]);

  return (
    <>
      <Button variant="text"><Link to={'/'} style={{marginTop: '10px', marginBottom: '10px'}}> {'< Back'} </Link></Button>
      <div className='detail'>
        <AlertToast context={MovieContext}/>
        {isLoading
          ? <Loading/>
          : <>
            {selectedMovie ? (
              <MovieCard movie={selectedMovie} cardType={ECardTypes.movieDetail} key={selectedMovie.imdbID}/>
            ) : (
              <div className="detail-description">
                <Typography variant="subtitle1" component="h2">
                  Failed to fetch detailed data, please try again later
                </Typography>
              </div>
            )}
          </>
        }
      </div>
    </>
  );
}

export default DetailedPage;
