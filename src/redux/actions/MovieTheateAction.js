import { MovieTheateService } from "../../services/MovieTheateService";
import { GET_MOVIE_THEATE } from "../types/MovieTheateType";

export const getMovieTheatelAction = async (dispatch) => {
  try {
    const res = await MovieTheateService.getMovieTheate();

    dispatch({
      type: GET_MOVIE_THEATE,
      movieTheates: res.data.content,
    });
  } catch (error) {
    console.log(error);
  }
};
