import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { zoomIn, zoomOut } from './zoomInFunc';
import classes from './product-detail.module.scss';

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id, image, price, title, description } = product;

  const prodId = useParams();

  async function GetProduct() {
    setIsLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${prodId.id}`);
      res.json().then((data) => setProduct(data));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    GetProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <button className='btn' to='/cart'>
          <i className='material-icons-outlined'>shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );

  return displayProduct;
}

export default ProductDetail;
