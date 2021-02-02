import * as actionTypes from './cart-types';
import {
  addItemToCart,
  deleteOneItemFromCart,
  removeItemFromCart,
} from './cart-utils';

const INITIAL_STATE = {
  isLoading: false,
  items: [],
  error: '',
};

export function cartReducer(cart = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_CART:
      return {
        ...cart,
        isLoading: true,
      };
    case actionTypes.FETCH_CART_SUCCESS:
      return {
        isLoading: false,
        items: action.payload,
        error: '',
      };
    case actionTypes.FETCH_CART_ERROR:
      return {
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...cart,
        items: addItemToCart(cart.items, action.payload),
      };
    case actionTypes.DELETE_ONE_ITEM:
      return {
        ...cart,
        items: deleteOneItemFromCart(cart.items, action.payload),
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...cart,
        items: removeItemFromCart(cart.items, action.payload),
      };

    default:
      return cart;
  }
}
