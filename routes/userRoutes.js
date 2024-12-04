// routes/userRoutes.js
import express from 'express';
import { signup, login } from '../controllers/userController.js';  // Ensure the controller methods are correctly imported
import { validateUser } from '../middlewares/validationMiddleware.js';

const router = express.Router();

// Route for signup
router.post('/signup', validateUser , signup);

// Route for login
router.post('/login', login);

export default router;  // Export the router to be used in index.js
