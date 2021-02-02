import React from 'react';
import { Link } from 'react-router-dom';

import useForm from 'hooks/useForm';
import validate from 'utils/validate-signup';
import { auth, createDatabaseUser } from 'firebase/firebase.utils';

import { Button, Form, FormInput, Title } from 'ui';

function SignUp() {
  const { onChange, handleSubmit, values, errors, reset } = useForm(
    register,
    validate,
    {
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
    }
  );

  async function register() {
    const displayName = values.username;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      await createDatabaseUser(user, { displayName });
      reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Title>Create a new account</Title>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='username'
          placeholder='username'
          value={values.username}
          onChange={onChange}
          error={errors.username}
          errorMessage={errors.username}
        />
        <FormInput
          type='text'
          name='email'
          placeholder='email'
          value={values.email}
          onChange={onChange}
          error={errors.email}
          errorMessage={errors.email}
        />
        <FormInput
          type='password'
          name='password'
          placeholder='password'
          value={values.password}
          onChange={onChange}
          error={errors.password}
          errorMessage={errors.password}
        />
        <FormInput
          type='password'
          name='confirmpassword'
          placeholder='confirm password'
          value={values.confirmpassword}
          onChange={onChange}
          error={errors.password}
          errorMessage={errors.password}
        />
        <Button type='submit'>Register</Button>
        <br />
        <p>
          Already registered?
          <Link to='/signin'> Sign in</Link>
        </p>
      </Form>
    </>
  );
}

export default SignUp;
