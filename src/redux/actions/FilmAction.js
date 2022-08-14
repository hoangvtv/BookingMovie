import { GET_FILM, GET_FILM_COMING, GET_FILM_PLAYING } from "../types/FilmType";
import { FilmService } from "../../services/FilmService";

export const getFilmAction = async (dispatch) => {
  try {
    const res = await FilmService.getFilm();

    dispatch({
      type: GET_FILM,
      arrFilm: res.data.content,
    });
  } catch (error) {
    console.log(error);
  }
};
