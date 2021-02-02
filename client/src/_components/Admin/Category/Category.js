import React from 'react';
import axios from 'axios';

import useForm from 'hooks/useForm';
import validateCategory from './validate-category';

import { Button, Form, FormInput, Title } from 'ui';

function Category() {
  const { onChange, handleSubmit, values, errors, reset } = useForm(
    createCategory,
    validateCategory,
    {
      name: '',
    }
  );

  async function createCategory() {
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}categories`, {
        name: values.name,
      });
      reset();
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <>
      <Title>Create Category</Title>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='name'
          placeholder='name'
          value={values.name}
          onChange={onChange}
          error={errors.name}
          errorMessage={errors.name}
        />
        <Button>Create Category</Button>
      </Form>
    </>
  );
}

export default Category;
