import React from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem/CartItem';
import { removeFromCart } from '../../redux/Shop/shop-actions';

import classes from './cart.module.scss';

function Cart({ cart, removeFromCart }) {
  let showItems = cart.map((item) => {
    return (
      <CartItem
        item={item}
        key={item.id}
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

function mapStateToProps(state) {
  return {
    cart: state.shop.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
