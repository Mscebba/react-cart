import React from 'react';

import { BackDrop } from 'ui';

import classes from './mobile-drawer.module.scss';

function MobileDrawer({ children, onClick, userName, show }) {
  let drawerClass = [
    `${classes['mobile-drawer']}`,
    show && `${classes['show']}`,
  ];
  drawerClass = drawerClass.join(' ');

  return (
    <>
      <BackDrop show={show} onClick={onClick} />
      <div className={drawerClass}>
        {userName ? (
          <h1>Hello {userName && <small>{userName}!</small>}</h1>
        ) : (
          <h1>Hello!</h1>
        )}
        <nav onClick={onClick}>{children}</nav>
      </div>
    </>
  );
}
export default MobileDrawer;
