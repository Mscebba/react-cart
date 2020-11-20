import { combineReducers } from 'redux';

import shopReducer from './Shop/shop-reducer';

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;
