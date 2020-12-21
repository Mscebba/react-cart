import React from 'react';
import { Link } from 'react-router-dom';

import { auth, signInWithGoogle } from 'firebase/firebase.utils';
import useForm from 'hooks/useForm';
import validate from 'utils/validate-signin';

import { Button, FormInput, Form, Title } from 'ui';

function SignIn() {
  const { onChange, handleSubmit, values, errors, reset } = useForm(
    login,
    validate,
    {
      email: '',
      password: '',
    }
  );

  async function login() {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit}>
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
        />
        <Button>Sign In</Button>
        <br />
        <p>
          Don't have an account?
          <Link to='/signup'> Register</Link>
        </p>
      </Form>
      <div
        style={{
          margin: '1rem auto',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
        }}
      >
        <p>or</p>
        <br />
        <Button onClick={signInWithGoogle} light>
          Sign In with Google
        </Button>
      </div>
    </>
  );
}

export default SignIn;
