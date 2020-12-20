import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { auth } from 'firebase/firebase.utils';
import { DropDown, DropDownItem } from 'ui';
import { selectCurrentUser } from 'redux/User/user-selectors';
import CartIcon from './CartIcon/CartIcon';

import logo from 'assets/logo.png';

import classes from './header.module.scss';

function Header({ currentUser }) {
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
            <Link to='/cart'>
              <CartIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
