import { GET_MOVIE_THEATE } from "../types/MovieTheateType";

const initialState = {
  movieTheates: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_THEATE: {
      return {
        ...state,
        movieTheates: action.movieTheates,
      };
    }
    default:
      return state;
  }
};
