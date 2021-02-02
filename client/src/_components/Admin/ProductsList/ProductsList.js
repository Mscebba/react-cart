import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from 'redux/Shop/shop-actions';

import { Title } from 'ui';

function ProductsList({ itemsData: { items }, fetchData }) {
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title>List of products</Title>
      <table width='100%' border='1' cellPadding='0' cellSpacing='0'>
        <thead>
          <tr>
            <th>
              <input type='checkbox' name='selectAll' id='' />
            </th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ _id, title, description, imgUrl, price }) => {
            return (
              <tr key={_id}>
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
                <td>{title}</td>
                <td>{description}</td>
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
