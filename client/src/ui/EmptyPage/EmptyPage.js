import React from 'react';

import classes from './empty-page.module.scss';
function EmptyPage({ children, icon, description, title }) {
  return (
    <div className={classes['empty-page']}>
      {icon && <div className={classes['empty-page__icon']}>{icon}</div>}
      {title && <h1 className={classes['empty-page__title']}>{title}</h1>}
      {description && (
        <div className={classes['empty-page__description']}>{description}</div>
      )}
      <div className={classes['empty-page__action']}>{children}</div>
    </div>
  );
}

export default EmptyPage;
