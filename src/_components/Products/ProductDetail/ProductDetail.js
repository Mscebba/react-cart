import React from 'react';
import { connect } from 'react-redux';

import { zoomIn, zoomOut } from './zoomInFunc';
import { addToCart } from 'redux/Cart/cart-actions';

import { ReactComponent as CartIcon } from 'assets/cart.svg';

import { Button, Spinner } from 'ui';
import classes from './product-detail.module.scss';

function ProductDetail({ addToCart, currentItem: { item } }) {
  let isLoading = false;
  const { id, description, image, price, title } = item;

  let displayProduct = isLoading ? (
    <Spinner />
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
        <Button onClick={() => addToCart(item)}>
          <CartIcon
            className={classes['product-detail__description__cart-icon']}
          />
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
