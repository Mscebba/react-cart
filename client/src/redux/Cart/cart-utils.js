export const addItemToCart = (cartItems, cartItemToAdd) => {
  const index = cartItems.findIndex(
    (cartItem) =>
      cartItem._id === cartItemToAdd._id && cartItem.size === cartItemToAdd.size
  );

  if (index !== -1) {
    const newCartItems = [...cartItems];
    newCartItems[index] = {
      ...newCartItems[index],
      qty: newCartItems[index].qty + 1,
    };
    return newCartItems;
  }

  return [
    ...cartItems,
    {
      ...cartItemToAdd,
      qty: 1,
      cartId: cartItemToAdd._id.concat(cartItemToAdd.size),
    },
  ];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const index = cartItems.findIndex(
    (cartItem) => cartItem.cartId === cartItemToRemove.cartId
  );

  const newCartItems = [...cartItems];
  if (index !== -1) {
    newCartItems[index].qty > 1 && (newCartItems[index].qty -= 1);
  }

  return newCartItems;
};

export const cartItemsCount = (items) =>
  items.reduce((accum, item) => accum + item.qty, 0);

export const cartItemsPrice = (items) =>
  items.reduce((accum, item) => accum + item.qty * item.price, 0);
