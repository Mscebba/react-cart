import { combineReducers } from 'redux';

import shop from './Shop/shop-reducer';

const rootReducer = combineReducers({
  shop,
});

export default rootReducer;
