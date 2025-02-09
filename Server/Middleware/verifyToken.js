import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization; // Use req.headers
        if (!authHeader) return res.status(401).json({ error: "Access Denied" });

        const token = authHeader.split(' ')[1]; // Extract token after "Bearer"
        if (!token) return res.status(401).json({ error: "Invalid Token Format" });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: "Invalid Token" });
    }
};

export default verifyToken;
