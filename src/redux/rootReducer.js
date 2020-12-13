import { combineReducers } from 'redux';

import { shopReducer as shop } from './Shop/shop-reducer';
import { cartReducer as cart } from './Cart/cart-reducer';

const rootReducer = combineReducers({
  shop,
  cart,
});

export default rootReducer;
