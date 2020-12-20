import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from 'redux/Cart/cart-selectors';
import { ReactComponent as Cart } from 'assets/cart.svg';

import classes from './cart-icon.module.scss';

function CartIcon({ count }) {
  return (
    <div className={classes['shopping-cart']}>
      <span>{count}</span>
      <Cart className={classes['shopping-cart__cart']} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  count: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
