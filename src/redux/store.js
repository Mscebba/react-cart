import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { throttle } from 'lodash';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import rootReducer from './rootReducer';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

const middlewares = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.subscribe(
  throttle(() => {
    saveToLocalStorage(store.getState());
  }, 1000)
);

export default store;
