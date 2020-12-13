import React from 'react';
import { connect } from 'react-redux';

import { zoomIn, zoomOut } from './zoomInFunc';
import { addToCart } from '../../../redux/Cart/cart-actions';

import { Button } from '../../../ui';
import classes from './product-detail.module.scss';

function ProductDetail({ addToCart, currentItem: { item } }) {
  let isLoading = false;
  const { id, description, image, price, title } = item;

  let displayProduct = isLoading ? (
    <h2>Loading product</h2>
  ) : (
    <div className={classes['product-detail']}>
      <div className={classes['product-detail__image']}>
        <div
          id={id}
          className={classes['product-detail__image__img']}
          style={{ backgroundImage: `url(${image})` }}
          onMouseMove={(event) => {
            zoomIn(event, id);
          }}
          onMouseOut={(e) => zoomOut(id)}
        />
        <i id='zoom' className='material-icons'>
          zoom_in
        </i>
      </div>
      <div className={classes['product-detail__description']}>
        <h2>{title}</h2>
        <p>${price}</p>
        <p className={classes['product-detail__description__text']}>
          {description}
        </p>
        <Button className='btn' onClick={() => addToCart(item)}>
          <i className='material-icons-outlined'>shopping_cart</i>
          <span>Add to cart</span>
        </Button>
      </div>
    </div>
  );

  return displayProduct;
}

const mapSateToProps = (state) => ({
  currentItem: state.shop.currentItem,
});

export default connect(mapSateToProps, { addToCart })(ProductDetail);
