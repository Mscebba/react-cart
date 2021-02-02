import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from 'redux/Cart/cart-actions';

import { Button } from 'ui';

import classes from './cart-item.module.scss';

function CartItem({ item }) {
  const { price, imgUrl, name, qty, slug, size } = item;
  const dispatch = useDispatch();

  return (
    <div className={classes['cart-item']}>
      <div className={classes['cart-item__image']}>
        <img src={imgUrl} alt={name} />
      </div>
      <div className={classes['cart-item__description']}>
        <Link to={`/product/${slug}`}>
          <h3>{name}</h3>
        </Link>
        <p>
          <small>Size: {size}</small>
        </p>
        <br />
        <p>${price}</p>
        <div className={classes['cart-item__description__quantity']}>
          <Button
            icon
            small
            light
            onClick={() => dispatch(deleteFromCart(item._id))}
          >
            <i className='material-icons-outlined'>remove</i>
          </Button>
          <div>{qty}</div>
          <Button
            icon
            small
            light
            onClick={() => dispatch(addToCart({ ...item, _id: item.prodId }))}
          >
            <i className='material-icons-outlined'>add</i>
          </Button>
        </div>
        <div className={classes['cart-item__description__actions']}>
          <span
            onClick={() => {
              dispatch(removeFromCart(item._id));
            }}
          >
            <i className='material-icons-outlined'>delete</i>
            remove item
          </span>
          <span>
            <i className='material-icons-outlined'>favorite_border</i>
            add to whish list
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
