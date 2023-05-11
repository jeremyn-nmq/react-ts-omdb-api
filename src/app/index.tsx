import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import MovieDetailed from '../pages/MovieDetailed';
import PageNotFound from '../pages/PageNotFound';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="movie/:id" element={<MovieDetailed/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </ThemeProvider>

  );
}

export default App;
