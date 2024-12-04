// index.js
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app = express();

// Define routes or middleware
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Export the app
export default app;
