import React from 'react';
import { Link } from 'react-router-dom';

import { MobileDrawer } from 'ui';

function SideDrawer({ currentUser, show, onClick, signOut }) {
  return (
    <MobileDrawer
      show={show}
      userName={currentUser && currentUser.displayName}
      onClick={onClick}
    >
      <Link to='/'>Shop</Link>
      <Link to='/cart'>Cart</Link>
      {currentUser ? (
        <div onClick={signOut}>Sign Out</div>
      ) : (
        <Link to='/signin'>Sign In / Sign Up</Link>
      )}
    </MobileDrawer>
  );
}

export default SideDrawer;
