import * as actionTypes from './cart-types';
import * as api from 'api';

export const fetchCartNew = () => async (dispatch) => {
  try {
    let products;
    dispatch({
      type: actionTypes.FETCH_CART,
    });
    const { data } = await api.fetchCartAxios();
    if (data.length > 0) [{ products }] = data;
    else products = data;

    dispatch({
      type: actionTypes.FETCH_CART_SUCCESS,
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_CART_ERROR,
      payload: error.message,
    });
    console.log(error);
  }
};

export const addToCart = (item) => async (dispatch) => {
  try {
    const { data } = await api.postCartItem(item);
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromCart = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteOneItem(id);
    dispatch({
      type: actionTypes.DELETE_ONE_ITEM,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
    const { data } = await api.removeItem(id);
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
