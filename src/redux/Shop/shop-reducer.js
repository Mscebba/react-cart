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
      const item = state.items.find((prod) => prod.id === action.payload.id);

      const isInCart = state.cart.find((e) => e.id === item.id);
      return {
        ...state,
        cart: isInCart
          ? state.cart.map((element) =>
              element.id === item.id
                ? { ...element, qty: element.qty + 1 }
                : element
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.MODIFY_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
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
