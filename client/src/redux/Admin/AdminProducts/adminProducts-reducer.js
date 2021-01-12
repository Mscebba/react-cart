import * as actionTypes from './adminProducts-types';

const INITIAL_STATE = {
  isLoading: false,
  items: [],
  currentItem: null,
  error: '',
};

export function adminProductsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
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
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
}

export default adminProductsReducer;
