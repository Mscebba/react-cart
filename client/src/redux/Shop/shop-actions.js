import axios from 'axios';

import * as actionTypes from './shop-types';

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
    payload: item,
  };
}

export function clearCurrent() {
  return {
    type: actionTypes.CLEAR_CURRENT,
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(fetchItems());
    axios
      .get(process.env.REACT_APP_API_URL)
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

export function fetchItem(slug) {
  return (dispatch) => {
    dispatch(fetchItems());
    axios
      .get(`${process.env.REACT_APP_API_URL}${slug}`)
      .then((res) => {
        const item = res.data;
        dispatch(loadCurrentItem(item));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchItemsError(errorMsg));
      });
  };
}
