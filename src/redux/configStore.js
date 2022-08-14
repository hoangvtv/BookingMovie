import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "./reducers/CarouselReducer";

const rootReducer = combineReducers({
  // reducers go here

  CarouselReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
