import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function MyListButton(): JSX.Element {
  return (
    <Link to={AppRoute.MyList}>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">9</span>
      </button>
    </Link>
  );
}

export default MyListButton;
