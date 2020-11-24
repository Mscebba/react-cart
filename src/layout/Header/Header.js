import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './header.module.scss';

function Header({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += +item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

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
              <span>{cartCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.shop.cart,
  };
}

export default connect(mapStateToProps)(Header);
