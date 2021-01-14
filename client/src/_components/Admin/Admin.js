import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'ui';

import classes from './admin.module.scss';

function Admin({ children }) {
  return (
    <div className={classes['admin-container']}>
      <div className={classes['admin-container__nav']}>
        <nav>
          <Link to='/admin'>Products</Link>
          <Link to='/admin/product'>Create Product</Link>
          <Link to='/admin'>Categories</Link>
          <Link to='/admin/category'>Create Category</Link>
          <br />
          <Link to='/'>Home</Link>
        </nav>
      </div>
      <div className={classes['admin-container__content']}>
        <Title>Administrator</Title>
        {children}
      </div>
    </div>
  );
}

export default Admin;
