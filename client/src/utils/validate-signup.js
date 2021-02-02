export default function validate(values) {
  let errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username && values.username.length < 3) {
    errors.username = 'Username must be at least 3 characters long';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email must be a valid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password && values.password.length < 5) {
    errors.password = 'Password must be at least 8 characters long';
  }

  if (values.password !== values.confirmpassword) {
    errors.password = "Passwords don't match";
  }

  return errors;
}
