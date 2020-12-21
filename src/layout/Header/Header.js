import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { auth } from 'firebase/firebase.utils';
import { DropDown, DropDownItem } from 'ui';
import { selectCurrentUser } from 'redux/User/user-selectors';
import SideDrawer from './SideDrawer/SideDrawer';
import CartIcon from './CartIcon/CartIcon';

import logo from 'assets/logo.png';

import classes from './header.module.scss';

function Header({ currentUser }) {
  const [show, setShow] = useState(false);
  function signOut() {
    auth.signOut();
  }
  return (
    <header className={classes['header']}>
      <div className={classes['header__brand']}>
        <Link to='/'>
          <img src={logo} alt='Logo' width='230' />
        </Link>
      </div>
      <nav role='navigation' className={classes['header__nav']}>
        <ul className={classes['header__nav__nav-links']}>
          <li className={classes['header__nav__nav-links__item']}>
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
          <li className={classes['header__nav__nav-links__item']}>
            <Link to='/'>Shop</Link>
          </li>
          <li className={classes['header__nav__nav-links__item']}>
            Return & Orders
          </li>
        </ul>
      </nav>
      <CartIcon />
      <div className={classes['header__menu']} onClick={() => setShow(!show)}>
        <i className='material-icons'>menu</i>
      </div>
      <SideDrawer
        currentUser={currentUser}
        show={show}
        onClick={() => setShow(!show)}
        signOut={signOut}
      />
    </header>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
