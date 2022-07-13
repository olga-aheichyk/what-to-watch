import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to={AppRoute.Root}>Go to main page</Link>
    </>
  );
}

export default NotFoundScreen;
