import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { shopReducer as shop } from './Shop/shop-reducer';
import { cartReducer as cart } from './Cart/cart-reducer';
import { userReducer as user } from './User/user-reducer';

const rootReducer = combineReducers({
  shop,
  cart,
  user,
});

const persistConfig = {
  key: 'root',
  storage,
};

export default persistReducer(persistConfig, rootReducer);
