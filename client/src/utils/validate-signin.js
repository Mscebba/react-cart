export default function validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email must be a valid email address';
  }

  return errors;
}
