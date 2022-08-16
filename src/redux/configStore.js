import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "./reducers/CarouselReducer";
import FilmReducer from "./reducers/FilmReducer";
import MovieTheateReducer from "./reducers/MovieTheateReducer";

const rootReducer = combineReducers({
  // reducers go here

  CarouselReducer,
  FilmReducer,
  MovieTheateReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
