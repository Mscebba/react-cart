import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData, loadCurrentItem } from 'redux/Shop/shop-actions';
import { Spinner, Title } from 'ui';
import Product from './Product/Product';

import classes from './products.module.scss';

function Products({
  fetchData,
  itemsData: { items, error, isLoading },
  loadCurrentItem,
}) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

export default connect(mapStateToProps, { fetchData, loadCurrentItem })(
  Products
);
