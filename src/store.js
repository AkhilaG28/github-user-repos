import { createStore, applyMiddleware, compose } from "redux";
import personReducer from "./Redux/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  personReducer,
  composeEnhancers(applyMiddleware(thunk))
);
