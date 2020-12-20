import React from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem/CartItem';
import { loadCurrentItem } from 'redux/Shop/shop-actions';
import { cartItemsCount, cartItemsPrice } from 'redux/Cart/cart-utils';

import { Button, Title } from 'ui';
import classes from './cart.module.scss';

function Cart({ items, price, count, loadCurrentItem }) {
  const tax = +(price * 0.07).toFixed(2);
  const totalPrice = (price + tax).toFixed(2);

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
      <Title>Shopping Cart</Title>
      <div className={classes['cart']}>
        <div className={classes['cart__items']}>{showItems}</div>
        <aside className={classes['cart__total']}>
          <h3>
            Cart Total <span>x{count} items</span>
          </h3>
          <ul>
            <li>
              <span>Subtotal:</span> <span>${price.toFixed(2)}</span>
            </li>
            <li>
              <span>Shipping:</span> <span>Free</span>
            </li>
            <li>
              <span>Tax 7%:</span> <span>${tax}</span>{' '}
            </li>
            <li className={classes['cart__total__price']}>
              <span>Total</span> <span>${totalPrice}</span>
            </li>
          </ul>

          <Button block>
            <span>Proceed to Checkout</span>
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
