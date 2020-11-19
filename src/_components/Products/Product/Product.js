import React from 'react';
import { Link } from 'react-router-dom';

import classes from './product.module.scss';

function Product({ item: { id, image, title, price } }) {
  return (
    <div className={classes['product__card']} key={id}>
      <Link to={`/product/${id}`}>
        <div className={classes['product__card__image']}>
          <span>${price}</span>
          <div
            className={classes['product__card__image__img']}
            style={{ backgroundImage: `url(${image})` }}
          />
          {/* <img src={image} alt={title} /> */}
        </div>
      </Link>
      <Link to={`/product/${id}`}>
        <b>{title}</b>
      </Link>
    </div>
  );
}

export default Product;
