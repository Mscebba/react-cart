import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui';

import classes from './sign-up.module.scss';

function SignUp() {
  return (
    <>
      <h1>Create a new account</h1>
      <form className={classes['form']}>
        <div>
          <input type='text' name='name' placeholder='name' />
        </div>
        <div>
          <input type='email' name='email' placeholder='email' />
        </div>
        <div>
          <input type='password' name='password' placeholder='password' />
        </div>
        <div>
          <input
            type='password'
            name='confirmpassword'
            placeholder='confirm password'
          />
        </div>
        <Button>Register</Button>
        <br />
        <p>
          Already registered?
          <Link to='/signin'>Sign in</Link>
        </p>
      </form>
    </>
  );
}

export default SignUp;
