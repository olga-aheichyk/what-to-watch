import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';

type CardProps = {
  film: Film;
}

function Card(props: CardProps): JSX.Element {
  const {
    film:
    {
      name,
      previewImage
    },
  } = props;

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <Link to={AppRoute.Film}>
      <article
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="small-film-card catalog__films-card"
      >
        <div className="small-film-card__image">
          <img src={isActive ? 'img/aviator.jpg' : previewImage} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">{name}</a>
        </h3>
      </article>
    </Link>
  );
}

export default Card;
