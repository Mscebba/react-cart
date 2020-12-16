import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { Button, FormInput, Form } from '../../ui';

function SignIn() {
  return (
    <>
      <h1 className='title'>Sign In</h1>
      <Form>
        <FormInput type='email' name='email' placeholder='email' />
        <FormInput type='password' name='password' placeholder='password' />
        <Button>Sign In</Button>
        <br />
        <p>
          Don't have an account?
          <Link to='/signup'>Register</Link>
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
