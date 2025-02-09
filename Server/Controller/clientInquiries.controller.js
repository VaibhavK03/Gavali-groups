import Client from "../Models/client.model.js";
import verifyToken from "../Middleware/verifyToken.js";

//Store Client Inquiry
export const storeClientInquiries = ( async (req, res) => {
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

//  Fetch Client Inquiries (Protected Route)
export const fetchClientInquiries = ( verifyToken, async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.status(200).json(clients);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});