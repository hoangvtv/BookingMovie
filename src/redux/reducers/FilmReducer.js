import {
  GET_FILM,
  GET_FILM_COMING,
  GET_FILM_PLAYING,
  GET_INFO_FILM,
  GET_MOVIE_SHOWTIMES,
  SET_FILM_PARAM,
} from "../types/FilmType";

const initialState = {
  arrFilm: [],
  playing: true,
  coming: true,
  arrFilmDefault: [],
  filmDetail: {},
  infoFilm: {},
  filmParam: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM: {
      return {
        ...state,
        arrFilm: action.arrFilm,
        arrFilmDefault: action.arrFilm,
      };
    }
    case GET_FILM_PLAYING: {
      return {
        ...state,
        playing: !state.playing,
        coming: true,
        arrFilm: state.arrFilmDefault.filter(
          (film) => film.dangChieu === state.playing
        ),
      };
    }

    case GET_FILM_COMING: {
      return {
        ...state,
        coming: !state.coming,
        playing: true,
        arrFilm: state.arrFilmDefault.filter(
          (film) => film.sapChieu === state.coming
        ),
      };
    }
    case GET_MOVIE_SHOWTIMES: {
      return {
        ...state,
        filmDetail: action.filmDetail,
      };
    }

    case GET_INFO_FILM: {
      return {
        ...state,
        infoFilm: action.infoFilm,
      };
    }

    case SET_FILM_PARAM: {
      return {
        ...state,
        filmParam: action.filmParam,
      };
    }
    default:
      return state;
  }
};
