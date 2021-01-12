import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useForm from 'hooks/useForm';
import { Button, Form, FormInput, Title } from 'ui';
import validateProducts from './validate-products';

function Products() {
  const [categories, setCategories] = useState([]);

  const { onChange, handleSubmit, values, errors, reset } = useForm(
    createProducts,
    validateProducts,
    {
      title: '',
      description: '',
      imgUrl: '',
      price: '',
      categoryId: null,
    }
  );

  async function getCategories() {
    try {
      await axios.get('http://localhost:4000/categories').then((res) => {
        setCategories(res.data);
      });
    } catch (err) {
      console.log(err.response);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  async function createProducts() {
    try {
      await axios.post('http://localhost:4000/products', {
        title: values.title,
        description: values.description,
        imgUrl: values.imgUrl,
        price: values.price,
        categoryId: values.categoryId,
      });
      reset();
    } catch (err) {
      console.log(err.response);
    }
  }

  let renderOptions = categories.map(({ name, _id }) => (
    <option value={_id} key={_id}>
      {name}
    </option>
  ));

  return (
    <>
      <Title>Create Product</Title>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='title'
          placeholder='Product name'
          value={values.title}
          onChange={onChange}
          error={errors.title}
          errorMessage={errors.title}
        />
        <FormInput
          type='text'
          name='description'
          placeholder='description'
          value={values.description}
          onChange={onChange}
          error={errors.description}
          errorMessage={errors.description}
        />
        <FormInput
          type='text'
          name='imgUrl'
          placeholder='Image Url'
          value={values.imgUrl}
          onChange={onChange}
          error={errors.imgUrl}
          errorMessage={errors.imgUrl}
        />
        <FormInput
          type='text'
          name='price'
          placeholder='Price'
          value={values.price}
          onChange={onChange}
          error={errors.price}
          errorMessage={errors.price}
        />
        <div style={{ color: 'red', fontFamily: 'Ubuntu' }}>
          {errors.categoryId}
        </div>
        <select name='categoryId' onChange={onChange} defaultValue={''}>
          <option disabled value=''>
            Select Category
          </option>
          {renderOptions}
        </select>

        <Button>Create Product</Button>
      </Form>
    </>
  );
}

export default Products;
