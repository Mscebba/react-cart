import React from 'react';

import classes from './back-drop.module.scss';

function BackDrop({ show, onClick }) {
  return show && <div className={classes['backdrop']} onClick={onClick}></div>;
}

export default BackDrop;
