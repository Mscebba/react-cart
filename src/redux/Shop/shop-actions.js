import axios from 'axios';

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

export function fetchItems() {
  return {
    type: actionTypes.FETCH_ITEMS,
  };
}

export function fetchItemsSuccess(items) {
  return {
    type: actionTypes.FETCH_ITEMS_SUCCESS,
    payload: items,
  };
}

export function fetchItemsError(error) {
  return {
    type: actionTypes.FETCH_ITEMS_ERROR,
    payload: error,
  };
}

export function loadCurrentItem(item) {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: {
      item,
    },
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(fetchItems());
    axios
      .get('https://fakestoreapi.com/products/?limit=6')
      .then((res) => {
        const items = res.data;
        dispatch(fetchItemsSuccess(items));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchItemsError(errorMsg));
      });
  };
}
