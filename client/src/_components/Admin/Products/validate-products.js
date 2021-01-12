export default function validateProducts(values) {
  let errors = {};

  if (!values.title) {
    errors.title = 'Name is required';
  } else if (values.title && values.title.length < 3) {
    errors.title = 'Title must be at least 3 characters long';
  }

  if (!values.description) {
    errors.description = 'Description is required';
  } else if (values.description && values.description.length < 10) {
    errors.description = 'Description must be at least 10 characters long';
  }

  if (!values.imgUrl) {
    errors.imgUrl = 'Image Url is required';
  } else if (values.imgUrl && values.imgUrl.length < 12) {
    errors.imgUrl = 'Image Url must be at least 12 characters long';
  }

  if (!values.price) {
    errors.price = 'Price is required';
  } else if (values.price && values.price.length < 1) {
    errors.price = 'Price must be at least 1 character long';
  }

  if (values.categoryId === ('' || null)) {
    errors.categoryId = 'Category is required';
  }

  return errors;
}
