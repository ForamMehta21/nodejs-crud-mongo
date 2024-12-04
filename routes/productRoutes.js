import express from 'express';
import { addProduct, getProducts } from '../controllers/productController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js'; // Import the authorization middleware

const router = express.Router();

// Route to add a product (protected route)
router.post('/addProduct', authMiddleware, addProduct);

// Route to get a list of products (protected route)
router.get('/getProducts', authMiddleware, getProducts);

export default router; // Export the router to use in the main app (index.js)
