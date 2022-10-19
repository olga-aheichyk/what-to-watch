import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Film } from '../../types/film';
import FilmScreen from '../film-screen/film-screen';
import LoginScreen from '../login-screen/login-screen';
import MainScreen from '../main-screen/main-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PlayerScreen from '../player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import ReviewScreen from '../review-screen/review-screen';

const TITLE = 'The Grand Budapest Hotel';
const GENRE = 'Drama';
const YEAR = 2012;

type AppProps = {
  films: Film[];
}

function App(props: AppProps): JSX.Element {
  const { films } = props;

  const favoriteFilms: Film[] = films.filter((film) => film.isFavorite);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen films={films} title={TITLE} genre={GENRE} year={YEAR} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyListScreen films={favoriteFilms} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<FilmScreen films={films} />} />
        <Route path={AppRoute.Review} element={<ReviewScreen />} />
        <Route path={AppRoute.Player} element={<PlayerScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
