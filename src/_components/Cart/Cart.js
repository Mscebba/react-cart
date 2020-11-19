import React, { useEffect, useState } from 'react';
import CartItem from './CartItem/CartItem';

import classes from './cart.module.scss';

function Cart({ setCart }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await fetch('https://fakestoreapi.com/products/?limit=2');
      res.json().then((data) => setCartItems(data));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  let showItems = isLoading ? (
    <h1>Loading items...</h1>
  ) : (
    cartItems.map((item) => {
      return <CartItem item={item} key={item.id} />;
    })
  );

  return (
    <>
      <h1>Cart</h1>
      <div className={classes['cart']}>
        <div className={classes['cart__items']}>{showItems}</div>
        <aside className={classes.cart__total}>
          <h3>The total amount</h3>
          <ul>
            <li>Temporary amount: $53.98</li>
            <li>Shipping: Free</li>
            <li>Tax 7%: $7</li>
            <li>Total (including Tax) $53.98</li>
          </ul>
          <button className='btn' to='/cart'>
            <i className='material-icons-outlined'>shopping_cart</i>
            <span>Checkout</span>
          </button>
        </aside>
      </div>
    </>
  );
}

export default Cart;
