import React from 'react';

import classes from './title.module.scss';

function Title({ children }) {
  return <h1 className={classes['title']}>{children}</h1>;
}

export default Title;
