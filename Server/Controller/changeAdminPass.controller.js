import bcrypt from "bcryptjs";
import Admin from "../Models/admin.model.js";
import verifyToken from "../Middleware/verifyToken.js";

export const changeAdminPass = ( verifyToken, async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        if (!oldPassword || !newPassword) return res.status(400).json({ error: "All fields are required" });

        const admin = await Admin.findOne();
        if (!admin) return res.status(404).json({ error: "Admin not found" });

        const isMatch = await bcrypt.compare(oldPassword, admin.password);
        if (!isMatch) return res.status(400).json({ error: "Old password is incorrect" });

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        admin.password = hashedNewPassword;
        await admin.save();

        res.status(200).json({ message: "Password changed successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});