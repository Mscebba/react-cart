import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { cartItemsCount } from '../../redux/Cart/cart-utils';
import { ReactComponent as Cart } from '../../assets/cart.svg';

import logo from '../../assets/logo.png';

import classes from './header.module.scss';

function Header({ count, user }) {
  return (
    <header>
      <nav role='navigation' className={classes['nav']}>
        <Link to='/' className={classes['nav__brand']}>
          <img src={logo} alt='Logo' width='230' />
        </Link>
        <ul>
          {user && (
            <li>
              <div onClick={() => auth.signOut()} style={{ cursor: 'pointer' }}>
                Sign Out
              </div>
            </li>
          )}
          <li>
            {user ? (
              <>
                Hello,
                <Link to='/signin' className={classes['dropdown']}>
                  {user.displayName}
                </Link>
              </>
            ) : (
              <Link to='/signin'>Sign In</Link>
            )}
          </li>
          <li>
            <Link to='/'>Shop</Link>
          </li>
          <li>Return & Orders</li>
          <li>
            <Link to='/cart' className={classes['shopping-cart']}>
              <span>{count}</span>
              <Cart className={classes['shopping-cart__cart']} />
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
