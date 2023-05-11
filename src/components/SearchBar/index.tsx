import {Container, IconButton, InputAdornment, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './index.module.scss';
import {Context, useContext} from 'react';
import {MovieContext} from '../../context/MovieContext';

export interface SearchBarProps {
  context: Context<any>,
}

function SearchBar({ context } : SearchBarProps) {
  const { fetchMovies, searchTerm, setSearchTerm } = useContext(context);

  const handleFormSubmit = (e:any) => {
    e.preventDefault()
    searchTerm && searchTerm !== '' && fetchMovies(searchTerm)
  }

  return (
    <>
      <form className={styles.searchForm} onSubmit={handleFormSubmit}>
        <Container className={styles.searchContainer} sx={{ mt: 5 , mb: 2, width: '100%'}}>
          <TextField
            id="search"
            type="search"
            label="Search"
            variant='standard'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            sx={{ width: '100%', color:'#fff' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </form>
    </>
  );
}

SearchBar.defaultProps = {
  context: MovieContext,
};

export default SearchBar;
