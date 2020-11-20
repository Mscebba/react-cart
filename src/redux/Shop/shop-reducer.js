import * as actionTypes from './shop-types';

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
};

function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.MODIFY_QTY:
      return {};
    case actionTypes.CURRENT_ITEM:
      return {};

    default:
      return state;
  }
}

export default shopReducer;
