import * as actionTypes from './shop-types';

const INITIAL_STATE = {
  isLoading: false,
  cart: [],
  items: [],
  currentItem: null,
  error: '',
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
    case actionTypes.FETCH_ITEMS:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
        error: '',
      };
    case actionTypes.FETCH_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
        items: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

export default shopReducer;
