export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToAdd._id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === cartItemToAdd._id
        ? { ...cartItem, qty: cartItem.qty + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, qty: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToRemove._id
  );

  if (existingCartItem.qty > 1) {
    return cartItems.map((cartItem) =>
      cartItem._id === cartItemToRemove._id
        ? { ...cartItem, qty: cartItem.qty - 1 }
        : cartItem
    );
  }
  return cartItems;
};

export const cartItemsCount = (items) =>
  items.reduce((accum, item) => accum + item.qty, 0);

export const cartItemsPrice = (items) =>
  items.reduce((accum, item) => accum + item.qty * item.price, 0);
