import * as actionTypes from './cart-types';

export function addToCart(item) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: item,
  };
}

export function deleteFromCart(id) {
  return {
    type: actionTypes.DELETE_FROM_CART,
    payload: id,
  };
}

export function removeFromCart(id) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  };
}
