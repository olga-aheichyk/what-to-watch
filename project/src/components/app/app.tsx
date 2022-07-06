import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
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

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen title={TITLE} genre={GENRE} year={YEAR} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyListScreen />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<FilmScreen />} />
        <Route path={AppRoute.Review} element={<ReviewScreen />} />
        <Route path={AppRoute.Player} element={<PlayerScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
