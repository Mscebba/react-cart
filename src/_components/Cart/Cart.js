import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from 'assets/cart.svg';

import {
  selectCartItems,
  selectCartItemsCount,
  selectCartItemsPrice,
} from 'redux/Cart/cart-selectors';
import CartItem from '_components/Cart/CartItem/CartItem';
import { loadCurrentItem } from 'redux/Shop/shop-actions';

import { Button, EmptyPage, Title } from 'ui';
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

  let viewCart =
    items.length > 0 ? (
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
    ) : (
      <EmptyPage
        icon={<Icon />}
        title='Your Cart is Empty'
        description="You don't have items in your Shopping Cart"
      >
        Click <Link to='/'>here</Link> to continue shopping
      </EmptyPage>
    );

  return viewCart;
}

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  price: selectCartItemsPrice,
  count: selectCartItemsCount,
});

export default connect(mapStateToProps, {
  loadCurrentItem,
})(Cart);
