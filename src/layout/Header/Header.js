import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { cartItemsCount } from '../../redux/Cart/cart-utils';

import classes from './header.module.scss';

function Header({ count }) {
  return (
    <header>
      <nav role='navigation' className={classes['nav']}>
        <h1 className={classes.brand}>
          <Link to='/'>
            <i>react</i> shoppingCART
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/cart'>
              <i className='material-icons-outlined'>shopping_cart</i>
              <span>{count}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function mapStateToProps({ cart: { items } }) {
  return {
    count: cartItemsCount(items),
  };
}

export default connect(mapStateToProps)(Header);
