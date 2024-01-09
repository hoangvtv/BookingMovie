import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import LoadingReducer from "./reducers/LoadingReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  // reducers go here
  UserReducer,
  LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
