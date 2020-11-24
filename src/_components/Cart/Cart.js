import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem/CartItem';
import { removeFromCart, loadCurrentItem } from '../../redux/Shop/shop-actions';

import { Button } from '../../ui';
import classes from './cart.module.scss';

function Cart({ cart, removeFromCart, loadCurrentItem }) {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let price = 0;
    let qty = 0;
    cart.forEach((item) => {
      qty += +item.qty;
      price += item.qty * item.price;
    });
    setQuantity(qty);
    setPrice(price);
  }, [cart, quantity, setQuantity, price, setPrice]);

  let showItems = cart.map((item) => {
    return (
      <CartItem
        {...item}
        key={item.id}
        onClick={() => loadCurrentItem(item)}
        removeItem={() => removeFromCart(item.id)}
      />
    );
  });

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
            <li>Tax 7%: $7 </li>
            <li>Total (including Tax) ${price.toFixed(2)}</li>
          </ul>
          <Button block>
            <i className='material-icons-outlined'>shopping_cart</i>
            <span>Checkout</span>
          </Button>
        </aside>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({ cart: state.shop.cart });

export default connect(mapStateToProps, { removeFromCart, loadCurrentItem })(
  Cart
);
