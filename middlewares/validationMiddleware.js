import { body } from 'express-validator';

export const validateUser = [
    // Validate firstName (not empty and max length 10)
    body('firstName')
        .notEmpty().withMessage('First name is required')
        .isLength({ max: 10 }).withMessage('First name cannot exceed 10 characters'),

    // Validate lastName (not empty and max length 10)
    body('lastName')
        .notEmpty().withMessage('Last name is required')
        .isLength({ max: 10 }).withMessage('Last name cannot exceed 10 characters'),

    // Validate mobileNumber using regex (Indian format)
    body('mobileNumber')
        .matches(/^(\+91|91|0)?[6-9]\d{9}$/).withMessage('Invalid mobile number'),

    // Validate email
    body('email')
        .isEmail().withMessage('Invalid email'),

    // Validate password (min length 6)
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];
