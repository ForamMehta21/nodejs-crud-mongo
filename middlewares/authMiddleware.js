import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token);

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. No token provided.',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure `JWT_SECRET` is defined in your environment variables
        req.user = decoded; // Attach the decoded user information to the request object
        next(); // Proceed to the next middleware or controller
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: 'Invalid token.',
        });
    }
};
