import {Box, Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography} from '@mui/material';
import {MovieDetail} from '../../utils/types';
import {ECardTypes} from '../../utils/enums';
import NO_IMAGE from '../../utils/no-image-placeholder.svg';
import {Link} from 'react-router-dom';

function MovieCard({movie, cardType} : {movie: MovieDetail, cardType:ECardTypes}){
  return (
    <>
      { cardType === ECardTypes.movie &&
        <Card>
          <CardActionArea>
            <Link to={`${cardType}/${movie.imdbID}`}>
              <CardMedia
                component="img"
                height='500px'
                image={(movie.Poster && movie.Poster !== '' && movie.Poster !== 'N/A') ? movie.Poster : NO_IMAGE}
                alt="movie-poster"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {movie.Title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{textTransform: 'capitalize'}}>
                  {movie.Year}
                  <br/>
                  {movie.Type}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      }
      { cardType === ECardTypes.movieDetail &&
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  image={(movie.Poster && movie.Poster !== '' && movie.Poster !== 'N/A') ? movie.Poster : NO_IMAGE}
                  alt="movie-poster"
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ my: 2 }}>
                    <b>Title: </b> {movie.Title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ my: 2 }}>
                    <b>Released date: </b> {movie.Released}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ my: 2 }}>
                    <b>Director: </b> {movie.Director}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ my: 2 }}>
                    <b>Plot: </b> {movie.Plot}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ my: 2 }}>
                    <b>Genre: </b> {movie.Genre}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ my: 2, display:'flex', alignItems:'center' }}>
                    <b>IMDB Rating: </b>
                    <Rating name="read-only" value={parseFloat(movie.imdbRating)} max={10} precision={0.1} readOnly/>
                    ({movie.imdbRating})
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      }
    </>
  )
}

export default MovieCard