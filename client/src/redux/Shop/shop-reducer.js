import * as actionTypes from './shop-types';

const INITIAL_STATE = {
  isLoading: false,
  items: [],
  currentItem: [],
  error: '',
};

export function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS:
      return {
        ...state,
        isLoading: true,
        currentItem: [],
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
        currentItem: [],
        error: action.payload,
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        isLoading: false,
        currentItem: action.payload,
        error: '',
      };
    case actionTypes.CLEAR_CURRENT:
      return {
        ...state,
        currentItem: [],
      };
    default:
      return state;
  }
}
