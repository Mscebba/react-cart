import { useEffect, useState } from 'react';

function useForm(callback, validate, initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reset = () => {
    setValues(initialValues);
  };

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return { onChange, handleSubmit, values, reset, errors };
}

export default useForm;
