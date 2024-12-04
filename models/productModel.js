import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            maxlength: 50,
            required: true,
        },
        description: {
            type: String,
            maxlength: 200,
        },
        itemNumber: {
            type: String,
            required: true,
            unique: true,
            immutable: true,
            match: /^[a-zA-Z0-9-]{1,15}$/,
        },
        barcode: {
            type: String,
            unique: true,
            match: /^[0-9]{1,15}$/,
        },
        image: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        inventory: {
            type: Number,
            required: true,
        },
        order: {
            type: Number,
            default: 0,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
