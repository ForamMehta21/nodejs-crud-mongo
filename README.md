# nodejs-crud-mongo

A simple CRUD application using Node.js, MongoDB, and Mongoose. This application includes services for user management and product management.

## User Service

- `signup(userData)`: Creates a new user with the given user data. User data should contain `email`, `password`, `firstName`, `lastName`, and optionally `mobileNumber`.
- `login({ email, mobileNumber, password })`: Logs in a user with the given email or mobile number and password. Returns a JSON Web Token (JWT) for authentication.

## Product Service

- `addProduct(productData, userId)`: Adds a new product with the given product data. Product data should contain `itemNumber`, `barcode`, and other product details. The product is associated with the given user ID.
- `getProducts(query)`: Retrieves products based on the provided query. The query can contain filters for `minPrice`, `maxPrice`, `minInventory`, `maxInventory`, and `search` terms. Additionally, the query can specify `sort` and pagination `page` and `limit`.

For more details on the API endpoints and usage, please refer to the API documentation or source code.