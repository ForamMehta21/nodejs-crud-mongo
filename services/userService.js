import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signup = async (userData) => {
    console.log(userData);
    const { email, password, firstName, lastName } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { mobileNumber: userData.mobileNumber }] });
    if (existingUser) {
        throw new Error('User already exists with this email or mobile number.');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ ...userData, password: hashedPassword });
    return newUser.save();
};


const login = async ({ email, mobileNumber, password }) => {
    const user = await User.findOne({ $or: [{ email }, { mobileNumber }] });
    if (!user) {
        throw new Error('User not found.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials.');
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
};

export default { signup, login };
