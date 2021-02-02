const { body, validationResult } = require('express-validator');

exports.userFieldValidations = [
  body('username')
    .trim()
    .isLength({ min: 5 })
    .withMessage('El campo nombre debe tener al menos 5 letras'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('No es un email valido')
    .isLength({ min: 9 })
    .withMessage('Email debe tener al menos 9 letras'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password debe contener al menos 6 caracteres'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

exports.categoryFieldValidations = [
  body('name')
    .trim()
    .isLength({ min: 3 })
    .withMessage('El campo nombre debe tener al menos 4 letras'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

exports.productFieldValidations = [
  body('title')
    .trim()
    .exists()
    .withMessage('Title already exists. Title field must be unique'),
  body('description')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
