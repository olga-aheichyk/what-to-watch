import { Film, ServerFilm } from './types/film';

export const adaptFilmToClient = (film: ServerFilm): Film => {
  const adaptedFilm = {
    ...film,
    previewImage: film.preview_image,
    posterImage: film.poster_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link,
    scoresCount: film.scores_count,
    runTime: film.run_time,
    isFavorite: film.is_favorite,
  };

  delete adaptedFilm.preview_image;
  delete adaptedFilm.poster_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.run_time;
  delete adaptedFilm.video_link;
  delete adaptedFilm.is_favorite;

  return adaptedFilm;
};
