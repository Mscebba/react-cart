import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from '../../../redux/Cart/cart-actions';
import { Button } from '../../../ui';

import classes from './cart-item.module.scss';

function CartItem({
  item,
  removeFromCart,
  onClick,
  addToCart,
  deleteFromCart,
}) {
  const { id, image, price, title, qty } = item;

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
        <div className={classes['cart-item__description__quantity-ctrl']}>
          <Button icon small light onClick={() => deleteFromCart(item)}>
            <i className='material-icons-outlined'>remove</i>
          </Button>
          <div>{qty}</div>
          <Button icon small light onClick={() => addToCart(item)}>
            <i className='material-icons-outlined'>add</i>
          </Button>
        </div>
        <Link
          to='#'
          onClick={() => removeFromCart(id)}
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

export default connect(null, {
  addToCart,
  deleteFromCart,
  removeFromCart,
})(CartItem);
