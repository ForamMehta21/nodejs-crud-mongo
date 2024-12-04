import productService from '../services/productService.js';

export const addProduct = async (req, res) => {
    try {
        const product = await productService.addProduct(req.body, req.user.id);
        res.status(201).json({ success: true, message: 'Product added successfully', product });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts(req.query);
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
