import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui';

import classes from './sign-in.module.scss';

function SignIn() {
  return (
    <>
      <h1>Sign In</h1>
      <form className={classes['form']}>
        <div>
          {/* <label htmlFor='name'>Name</label> */}
          <input type='email' name='name' placeholder='email' />
        </div>
        <div>
          {/* <label htmlFor='password'>Password</label> */}
          <input type='password' name='password' placeholder='password' />
        </div>
        <Button>Sign In</Button>
        <br />
        <p>
          Don't have an account?
          <Link to='/signup'>Register</Link>
        </p>
      </form>
    </>
  );
}

export default SignIn;
