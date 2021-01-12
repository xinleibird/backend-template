import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

type PreloadType = {
  [key: string]: any;
};

export const configureStore = (preload: PreloadType) => {
  return createStore(
    createRootReducer(history),
    preload,
    compose(applyMiddleware(routerMiddleware(history), thunk))
  );
};
