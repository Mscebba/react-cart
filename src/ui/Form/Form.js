import React from 'react';

import classes from './form.module.scss';
function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={classes['form']}>
      {children}
    </form>
  );
}

export default Form;
