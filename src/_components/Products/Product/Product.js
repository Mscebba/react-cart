import React from 'react';
import { Link } from 'react-router-dom';

import classes from './product.module.scss';

function Product({ id, image, title, price, onClick }) {
  return (
    <div className={classes['product__card']} key={id}>
      <Link to={`/product/${id}`} onClick={onClick}>
        <div className={classes['product__card__image']}>
          <span>${price}</span>
          <div
            className={classes['product__card__image__img']}
            style={{
              backgroundImage: `url(${image})`,
              backgroundColor: '#ffffff',
            }}
          />
          {/* <img src={image} alt={title} /> */}
        </div>
      </Link>
      <Link to={`/product/${id}`} onClick={onClick}>
        <b>{title}</b>
      </Link>
    </div>
  );
}

export default Product;
