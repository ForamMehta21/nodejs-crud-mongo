import Product from '../models/productModel.js';

const addProduct = async (productData, userId) => {
    const { itemNumber, barcode } = productData;

    // Check for unique constraints (itemNumber, barcode per user)
    const existingProduct = await Product.findOne({
        $or: [{ itemNumber }, { barcode }],
        userId,
    });

    if (existingProduct) {
        throw new Error('Item number or barcode already exists for this user.');
    }

    // Create product
    const newProduct = new Product({ ...productData, userId });
    return newProduct.save();
};

const getProducts = async (query) => {
    const { minPrice, maxPrice, minInventory, maxInventory, search, sort, page = 1, limit = 10 } = query;

    const filters = {};

    // Filter by price range
    if (minPrice && maxPrice) {
        filters.price = { $gte: minPrice, $lte: maxPrice };
    }

    // Filter by inventory range
    if (minInventory && maxInventory) {
        filters.inventory = { $gte: minInventory, $lte: maxInventory };
    }

    // Search by title, description, itemNumber, or barcode
    if (search) {
        const searchRegex = new RegExp(search, 'i');
        filters.$or = [
            { title: searchRegex },
            { description: searchRegex },
            { itemNumber: searchRegex },
            { barcode: searchRegex },
        ];
    }

    // Pagination and sorting
    const skip = (page - 1) * limit;
    const sortBy = sort || 'createdAt';

    return Product.find(filters)
        .sort({ [sortBy]: 1 })
        .skip(skip)
        .limit(parseInt(limit));
};

export default { addProduct, getProducts };
