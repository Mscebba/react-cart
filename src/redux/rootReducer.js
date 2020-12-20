import { combineReducers } from 'redux';

import { shopReducer as shop } from './Shop/shop-reducer';
import { cartReducer as cart } from './Cart/cart-reducer';
import { userReducer as user } from './User/user-reducer';

const rootReducer = combineReducers({
  shop,
  cart,
  user,
});

export default rootReducer;
