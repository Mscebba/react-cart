export default function validateCategory(values) {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name && values.name.length < 3) {
    errors.name = 'Username must be at least 3 characters long';
  }

  return errors;
}
