require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Define Client Schema
const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    inquiry: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Client = mongoose.model('Client', ClientSchema);

// API Routes
//  Store new client form
app.post('/api/client', async (req, res) => {
    try {
        const { name, email, phone, inquiry } = req.body;
        if (!name || !email || !phone || !inquiry) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const newClient = new Client({ name, email, phone, inquiry });
        await newClient.save();
        res.status(201).json({ message: "Client form submitted successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Fetch inquires from DB
app.get('/api/admin/inquiries', async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.status(200).json(clients);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
