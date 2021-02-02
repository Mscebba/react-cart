import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from 'assets/cart.svg';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCartNew } from 'redux/Cart/cart-actions';
import { cartItemsPrice, cartItemsCount } from 'redux/Cart/cart-utils';
import CartItem from '_components/Cart/CartItem/CartItem';

import { Button, EmptyPage, Spinner, Title } from 'ui';
import classes from './cart.module.scss';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { items, isLoading, error } = cart;

  useEffect(() => {
    dispatch(fetchCartNew());
  }, [dispatch]);

  const totalItems = cartItemsCount(items);
  const subTotal = cartItemsPrice(items);
  const tax = +(subTotal * 0.07).toFixed(2);
  const totalPrice = (subTotal + tax).toFixed(2);

  let viewCart = isLoading ? (
    <Spinner />
  ) : error ? (
    <h2>{error}</h2>
  ) : items && items.length > 0 ? (
    <>
      <Title>Shopping Cart</Title>
      <div className={classes['cart']}>
        <div className={classes['cart__items']}>
          {items.map((i) => (
            <CartItem key={i._id} item={i} />
          ))}
        </div>
        <aside className={classes['cart__total']}>
          <h3>
            Cart Total <span>x {totalItems} items</span>
          </h3>
          <ul>
            <li>
              <span>Subtotal:</span> <span>$ {subTotal.toFixed(2)} </span>
            </li>
            <li>
              <span>Shipping:</span> <span>Free</span>
            </li>
            <li>
              <span>Tax 7%:</span> <span>${tax}</span>
            </li>
            <li className={classes['cart__total__price']}>
              <span>Total</span> <span>$ {totalPrice}</span>
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

  return <>{viewCart}</>;
}

export default Cart;
