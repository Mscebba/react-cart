import React from 'react';

import classes from './form-input.module.scss';

function FormInput({
  label,
  labelFor,
  labelClass,
  onChange,
  error,
  errorMessage,
  ...props
}) {
  let labelClassName = [`${classes['label']}`, `${labelClass && labelClass}`];
  labelClassName = labelClassName.join(' ');

  return (
    <div className={classes['form-control']}>
      {label && (
        <label htmlFor={labelFor} className={labelClassName}>
          {label}
        </label>
      )}
      <input onChange={onChange} {...props} />
      {error && <div className={classes['error']}>{errorMessage}</div>}
    </div>
  );
}

export default FormInput;
