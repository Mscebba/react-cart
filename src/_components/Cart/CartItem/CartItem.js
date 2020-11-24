import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { modifyQty } from '../../../redux/Shop/shop-actions';
import { Button } from '../../../ui';

import classes from './cart-item.module.scss';

function CartItem({
  id,
  image,
  price,
  title,
  qty,
  removeItem,
  modifyQty,
  increaseQty,
  decreaseQty,
  onClick,
}) {
  const [quantity, setQuantity] = useState(qty);
  const inputRef = useRef();

  function increaseQTY(id) {
    setQuantity(quantity + 1);
    modifyQty(id, +inputRef.current.value + 1);
  }

  function decreaseQTY(id) {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      modifyQty(id, +inputRef.current.value - 1);
    }
  }

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
          <Button icon small light onClick={() => decreaseQTY(id)}>
            <i className='material-icons-outlined'>remove</i>
          </Button>
          <input
            type='number'
            ref={inputRef}
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
          <Button icon small light onClick={() => increaseQTY(id)}>
            <i className='material-icons-outlined'>add</i>
          </Button>
        </div>
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
