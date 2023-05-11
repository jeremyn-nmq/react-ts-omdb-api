import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './app';
import './styles/main.scss';
import MovieAppProvider from './context/MovieContext';

const htmlRoot = document.getElementById('root') as HTMLElement;
const reactRoot = ReactDOM.createRoot(htmlRoot);

reactRoot.render(
  process.env.REACT_APP_SCRICT_MODE === 'true' ? (
    <StrictMode>
      <BrowserRouter>
        <MovieAppProvider>
          <App />
        </MovieAppProvider>
      </BrowserRouter>
    </StrictMode>
  ) : (
    <BrowserRouter>
      <MovieAppProvider>
        <App />
      </MovieAppProvider>
    </BrowserRouter>
  ),
);

