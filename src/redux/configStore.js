import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "./reducers/CarouselReducer";
import FilmReducer from "./reducers/FilmReducer";
import MovieTheateReducer from "./reducers/MovieTheateReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  // reducers go here

  CarouselReducer,
  FilmReducer,
  MovieTheateReducer,
  UserReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
