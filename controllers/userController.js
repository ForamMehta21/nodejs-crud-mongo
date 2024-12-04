import userService from '../services/userService.js';
import { validationResult } from 'express-validator';

export const signup = async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            success: false, 
            message: 'Validation failed', 
            errors: errors.array() 
        });
    }

    try {
        // Proceed with user signup
        const user = await userService.signup(req.body);
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred during signup',
            error: error.message,
        });
    }
};

export const login = async (req, res) => {
    try {
        const token = await userService.login(req.body);
        res.status(200).json({ success: true, message: 'Login successful', token });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
