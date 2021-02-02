import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((accum, item) => accum + item.qty, 0)
);

export const selectCartItemsPrice = createSelector([selectCartItems], (items) =>
  items.reduce((accum, item) => accum + item.qty * item.price, 0)
);
