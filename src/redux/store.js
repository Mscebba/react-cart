import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { throttle } from 'lodash';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveToLocalStorage(store.getState());
  }, 1000)
);

export default store;
