import React from 'react';
import { connect } from 'react-redux';

import { zoomIn, zoomOut } from './zoomInFunc';
import { addToCart } from '../../../redux/Shop/shop-actions';

import classes from './product-detail.module.scss';

function ProductDetail({
  addToCart,
  currentItem: {
    item: { id, description, image, price, title },
    qty,
  },
}) {
  let isLoading = false;

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
        <button className='btn' to='/cart' onClick={() => addToCart(id)}>
          <i className='material-icons-outlined'>shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );

  return displayProduct;
}

function mapSateToProps(state) {
  return {
    currentItem: state.shop.currentItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
}

export default connect(mapSateToProps, mapDispatchToProps)(ProductDetail);
