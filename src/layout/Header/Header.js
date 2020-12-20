import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from 'firebase/firebase.utils';
import { cartItemsCount } from 'redux/Cart/cart-utils';
import { ReactComponent as Cart } from 'assets/cart.svg';
import { DropDown, DropDownItem } from 'ui';

import logo from 'assets/logo.png';

import classes from './header.module.scss';

function Header({ count, currentUser }) {
  function signOut() {
    auth.signOut();
  }
  return (
    <header>
      <nav role='navigation' className={classes['nav']}>
        <Link to='/' className={classes['nav__brand']}>
          <img src={logo} alt='Logo' width='230' />
        </Link>
        <ul className={classes['nav__nav-links']}>
          <li className={classes['nav__nav-links__item']}>
            {currentUser ? (
              <>
                Hello,
                <DropDown
                  dropdownLink={currentUser.displayName}
                  dropdownTitle='Your account'
                >
                  <DropDownItem onClick={() => ''}>Account</DropDownItem>
                  <DropDownItem onClick={() => ''}>Your orders</DropDownItem>
                  <DropDownItem onClick={() => ''}>Wish list</DropDownItem>
                  <DropDownItem onClick={signOut} style={{ cursor: 'pointer' }}>
                    Sign Out
                  </DropDownItem>
                </DropDown>
              </>
            ) : (
              <Link to='/signin'>Sign In</Link>
            )}
          </li>
          <li className={classes['nav__nav-links__item']}>
            <Link to='/'>Shop</Link>
          </li>
          <li className={classes['nav__nav-links__item']}>Return & Orders</li>
          <li className={classes['nav__nav-links__item']}>
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

const mapStateToProps = ({ cart: { items }, user: { currentUser } }) => ({
  count: cartItemsCount(items),
  currentUser,
});

export default connect(mapStateToProps)(Header);
