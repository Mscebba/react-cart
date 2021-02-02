import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { selectCartItemsCount } from 'redux/Cart/cart-selectors';
import { ReactComponent as Cart } from 'assets/cart.svg';

import classes from './cart-icon.module.scss';

function CartIcon({ count = 5 }) {
  return (
    <div className={classes['shopping-cart']}>
      <Link to='/cart'>
        <span>{count}</span>
        <Cart className={classes['shopping-cart__cart']} />
      </Link>
    </div>
  );
}

// const mapStateToProps = createStructuredSelector({
//   count: selectCartItemsCount,
// });

export default CartIcon;
