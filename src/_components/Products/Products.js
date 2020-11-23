import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData, loadCurrentItem } from '../../redux/Shop/shop-actions';
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
    <h1>Loading products...</h1>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    items.map((item) => {
      return (
        <Product
          {...item}
          key={item.id}
          onClick={() => loadCurrentItem(item)}
        />
      );
    })
  );

  return (
    <div className={classes['products']}>
      <h1 className={classes['products__title']}>New arrivals</h1>
      <div role='grid' className={classes['products__grid']}>
        {productsList}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    itemsData: state.shop,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
