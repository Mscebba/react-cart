import React, { useEffect, useState } from 'react';

import Product from './Product/Product';

import classes from './products.module.scss';

// const product = [
//   {
//     imgUrl:
//       'https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg',
//     name: 'Sport Shoes',
//     price: 110,
//   },
//   {
//     imgUrl:
//       'https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg',
//     name: 'Red SNEAKER',
//     price: 91,
//   },
//   {
//     imgUrl:
//       'https://image.shutterstock.com/z/stock-photo-pink-and-black-sport-woman-shoes-isolated-on-white-background-709418083.jpg',
//     name: 'Sport Shoes Women',
//     price: 94,
//   },
//   {
//     imgUrl:
//       'https://image.shutterstock.com/z/stock-photo-children-s-autumn-or-winter-fashion-boots-isolated-on-white-background-708900334.jpg',
//     name: 'Winter boots children',
//     price: 143,
//   },
//   {
//     imgUrl:
//       'https://image.shutterstock.com/z/stock-photo-bangkok-thailand-january-onitsuka-tiger-asics-gel-lyte-iii-on-january-in-bangkok-292088969.jpg',
//     name: 'Sports shoes Red-White',
//     price: 150,
//   },
//   {
//     imgUrl:
//       'https://image.shutterstock.com/z/stock-photo-leather-shoes-isolated-on-white-background-including-clipping-path-216565609.jpg',
//     name: 'Black leather shoes',
//     price: 250,
//   },
//   {
//     imgUrl:
//       'https://image.shutterstock.com/z/stock-photo-casual-shoes-on-white-background-included-clipping-path-667459072.jpg',
//     name: 'Shoes Canvas',
//     price: 50,
//   },
//   {
//     imgUrl:
//       'https://image.shutterstock.com/z/stock-photo-white-sneakers-on-white-background-including-clipping-path-1100736923.jpg',
//     name: 'Shoes White',
//     price: 85,
//   },
//   {
//     imgUrl:
//       'https://image.shutterstock.com/z/stock-photo-yellow-sneakers-15066415.jpg',
//     name: 'Sneakers Yellow',
//     price: 125,
//   },
// ];

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await fetch('https://fakestoreapi.com/products/?limit=6');
      res.json().then((data) => setProducts(data));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  let productsList = isLoading ? (
    <h1>Loading products...</h1>
  ) : (
    products.map((item) => {
      return <Product item={item} key={item.id} />;
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

export default Products;
