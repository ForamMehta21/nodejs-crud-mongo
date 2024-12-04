import express from 'express'; // Import express
import dotenv from 'dotenv';  // Import the Express app using ES6 import
import db from './utils/db.js';
import appRoutes from './index.js';
import bodyParser from 'body-parser';

dotenv.config();  // Load environment variables from .env
const app = express();
// Initialize Express app (if you're not initializing in index.js)
db(); // Connect to the database

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

app.use(appRoutes);
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

