import axios from 'axios';

const url = process.env.REACT_APP_API_BASE_URL;

export const fetchCartAxios = () => axios.get(`${url}carts`);
export const postCartItem = (item) =>
  axios.post(`${url}carts/addtocart/`, item);
export const deleteOneItem = (id) =>
  axios({
    method: 'DELETE',
    url: `${url}carts/removefromcart/`,
    data: { _id: id },
  });

export const removeItem = (id) =>
  axios({
    method: 'DELETE',
    url: `${url}carts/deleteitemcart/`,
    data: { _id: id },
  });
