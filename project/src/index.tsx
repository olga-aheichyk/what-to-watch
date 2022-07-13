import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/app';
import { films } from './mocks/films';
import { Film } from './types/film';
import { adaptFilmToClient } from './utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const adaptedFilms: Film[] = films.map((film) => adaptFilmToClient(film));

root.render(
  <React.StrictMode>
    <App films={adaptedFilms} />
  </React.StrictMode>,
);
