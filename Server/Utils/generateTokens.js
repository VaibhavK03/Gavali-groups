import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'; 

dotenv.config();

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '6d' });
};

export default generateToken;