import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        maxlength: 10,
        required: true,
    },
    lastName: {
        type: String,
        maxlength: 10,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^(\+91|91|0)?[6-9]\d{9}$/.test(value),
            message: 'Invalid Indian mobile number',
        },
        unique: true,
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Invalid email address'],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);
export default User;
