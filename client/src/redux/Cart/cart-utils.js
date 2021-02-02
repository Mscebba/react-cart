export const addItemToCart = (cartItems, cartItemToAdd) => {
  const index = cartItems.findIndex(
    (cartItem) =>
      cartItem.prodId === cartItemToAdd._id &&
      cartItem.size === cartItemToAdd.size
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
    },
  ];
};

export const deleteOneItemFromCart = (cartItems, cartItemToRemove) => {
  const index = cartItems.findIndex(
    (cartItem) => cartItem._id === cartItemToRemove
  );

  const newCartItems = [...cartItems];
  if (index !== -1) {
    newCartItems[index].qty > 1 && (newCartItems[index].qty -= 1);
  }

  return newCartItems;
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem._id !== cartItemToRemove
  );
  return newCartItems;
};

export const cartItemsCount = (items) =>
  items.reduce((accum, item) => accum + item.qty, 0);

export const cartItemsPrice = (items) =>
  items.reduce((accum, item) => accum + item.qty * item.price, 0);
