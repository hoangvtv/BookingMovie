import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "./reducers/CarouselReducer";
import FilmReducer from "./reducers/FilmReducer";

const rootReducer = combineReducers({
  // reducers go here

  CarouselReducer,
  FilmReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
