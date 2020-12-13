import React from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem/CartItem';
import { loadCurrentItem } from '../../redux/Shop/shop-actions';
import { cartItemsCount, cartItemsPrice } from '../../redux/Cart/cart-utils';

import { Button } from '../../ui';
import classes from './cart.module.scss';

function Cart({ items, price, count, loadCurrentItem }) {
  let showItems = items.map((item) => {
    return (
      <CartItem
        item={item}
        key={item.id}
        onClick={() => loadCurrentItem(item)}
      />
    );
  });

  return (
    <>
      <h1 className={classes['cart__title']}>Shopping Cart</h1>
      <div className={classes['cart']}>
        <div className={classes['cart__items']}>{showItems}</div>
        <aside className={classes.cart__total}>
          <h3>The total amount</h3>
          <ul>
            <li>Total items count: {count}</li>
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

const mapStateToProps = ({ cart: { items } }) => ({
  items,
  price: cartItemsPrice(items),
  count: cartItemsCount(items),
});

export default connect(mapStateToProps, {
  loadCurrentItem,
})(Cart);
