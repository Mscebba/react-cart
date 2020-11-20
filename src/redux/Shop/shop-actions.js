import * as actionTypes from './shop-types';

export function addToCart(id) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id,
    },
  };
}

export function removeFromCart(id) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
}

export function modifyQty(id, qty) {
  return {
    type: actionTypes.MODIFY_QTY,
    payload: {
      id,
      qty,
    },
  };
}

export function currentItem(item) {
  return {
    type: actionTypes.CURRENT_ITEM,
    payload: {
      item,
    },
  };
}
