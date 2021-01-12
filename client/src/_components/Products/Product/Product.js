import React from 'react';
import { Link } from 'react-router-dom';

import classes from './product.module.scss';

function Product({ id, imgUrl, title, price, onClick, slug }) {
  return (
    <div className={classes['product-card']} key={id}>
      <Link to={`/product/${slug}`} onClick={onClick}>
        <div className={classes['product-card__image']}>
          <span>${price}</span>
          <div
            className={classes['product-card__image__img']}
            style={{
              backgroundImage: `url(${imgUrl})`,
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
