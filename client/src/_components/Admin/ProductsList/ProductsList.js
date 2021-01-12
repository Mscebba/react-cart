import React, { useEffect, useState } from 'react';
import { Title } from 'ui';
import { connect } from 'react-redux';
import { fetchData } from 'redux/Shop/shop-actions';

function ProductsList({ itemsData: { items }, fetchData }) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Title>List of products</Title>
      <table width='100%' border='1' cellPadding='0' cellSpacing='0'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ _id, title, description, imgUrl, price }) => {
            return (
              <tr key={_id}>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                    }}
                  >
                    <img
                      src={imgUrl}
                      alt={title}
                      style={{
                        display: 'block',
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </td>
                <td>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = ({ shop: itemsData }) => ({
  itemsData,
});

export default connect(mapStateToProps, { fetchData })(ProductsList);
