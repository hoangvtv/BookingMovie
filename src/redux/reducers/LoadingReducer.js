import { DISPLAY_LOADING, HIDE_LOADING } from "../types/LoadingType";

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case HIDE_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
