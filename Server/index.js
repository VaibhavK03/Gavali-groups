import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectToMongoDB from './Database/connectToMongoDB.js';

import adminRoutes from './Routes/admin.route.js';
import clientRoutes from './Routes/client.route.js';

import verifyToken from './Middleware/verifyToken.js';
import generateToken from './Utils/generateTokens.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Generate JWT Token
generateToken();

// Middleware to Verify Token
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "Access granted", admin: req.admin });
});

app.use("/api/admin", adminRoutes);
app.use("/api/client", clientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});