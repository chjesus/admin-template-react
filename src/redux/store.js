import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createReducer from "../redux/reducers";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, routeMiddleware];

export default function generateStore(preloadedState) {
  const store = createStore(
    createReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), ...middlewares))
  );
  return store;
}
