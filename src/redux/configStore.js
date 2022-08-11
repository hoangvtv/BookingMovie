import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  // reducers go here
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
