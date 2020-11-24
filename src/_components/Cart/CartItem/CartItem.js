import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { modifyQty } from '../../../redux/Shop/shop-actions';

import classes from './cart-item.module.scss';

function CartItem({
  id,
  image,
  price,
  title,
  qty,
  removeItem,
  modifyQty,
  onClick,
}) {
  const [quantity, setQuantity] = useState(qty);

  return (
    <div className={classes['cart-item']}>
      <div className={classes['cart-item__image']}>
        <img src={image} alt={title} />
      </div>
      <div className={classes['cart-item__description']}>
        <Link to={`/product/${id}`} onClick={onClick}>
          <h3>{title}</h3>
        </Link>
        <p>${price}</p>
        <input
          type='number'
          size='2'
          maxLength='2'
          min='1'
          max='10'
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
            modifyQty(id, e.target.value);
          }}
        />
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

export default connect(null, { modifyQty })(CartItem);
