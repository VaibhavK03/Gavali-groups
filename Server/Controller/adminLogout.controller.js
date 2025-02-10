import Admin from "../Models/admin.model.js";

export const adminLogout = (async (req, res) => {
    try {
        const admin = await Admin.findOne({ username: req.body.username });
        if (!admin) return res.status(400).json({ error: "Invalid credentials" });

        const token = await admin.generateToken();
        res.status(200).json({ message: "Logout successful", token });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
