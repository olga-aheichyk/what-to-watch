import { Film } from '../../types/film';
import Card from '../card/card';

type FilmsListProps = {
  films: Film[];
};

/* eslint-disable no-console */
function FilmsList(props: FilmsListProps): JSX.Element {
  const { films } = props;

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <Card
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

export default FilmsList;
