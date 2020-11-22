import React from 'react';
import { Link } from 'react-router-dom';

import classes from './cart-item.module.scss';

function CartItem({ item: { image, price, title, qty }, removeItem }) {
  return (
    <div className={classes['cart-item']}>
      <div className={classes['cart-item__image']}>
        <img src={image} alt={title} />
      </div>
      <div className={classes['cart-item__description']}>
        <h3>{title}</h3>
        <p>${price}</p>
        <input type='number' size='2' maxLength='2' min='1' max='10' />
        <Link
          to='#'
          onClick={removeItem}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <i className='material-icons-outlined'>delete</i>
          remove item
        </Link>
        <Link to='#' style={{ display: 'flex', alignItems: 'center' }}>
          <i className='material-icons-outlined'>favorite_border</i>
          add to whish list
        </Link>
      </div>
    </div>
  );
}

export default CartItem;
