import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchData } from 'redux/Shop/shop-actions';
import { fetchCartNew } from 'redux/Cart/cart-actions';

import Product from './Product';
import { Spinner, Title } from 'ui';

import classes from './products.module.scss';

function Products({ fetchData, itemsData: { items, error, isLoading } }) {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
    dispatch(fetchCartNew());
  }, [fetchData, dispatch]);

  let productsList = isLoading ? (
    <Spinner />
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    items.map((item) => {
      return <Product {...item} key={item._id} />;
    })
  );

  return (
    <div className={classes['products']}>
      <Title>New arrivals</Title>
      <div role='grid' className={classes['products__grid']}>
        {productsList}
      </div>
    </div>
  );
}

const mapStateToProps = ({ shop: itemsData }) => ({
  itemsData,
});

export default connect(mapStateToProps, { fetchData })(Products);
