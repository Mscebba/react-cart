import * as actionTypes from './cart-types';
import { addItemToCart, removeItemFromCart } from './cart-utils';

const INITIAL_STATE = {
  items: [],
};

export function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    case actionTypes.DELETE_FROM_CART:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    default:
      return state;
  }
}

export default cartReducer;
