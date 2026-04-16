import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// POST /api/admin/login
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        const admin = await Admin.findOne({ email: email.toLowerCase() });
        if (!admin) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: admin._id, email: admin.email, role: admin.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            admin: { id: admin._id, email: admin.email, role: admin.role },
        });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

// POST /api/admin/seed  (create default admin — run once)
export const seedAdmin = async (req, res) => {
    try {
        const existing = await Admin.findOne({ email: "admin@realestate.com" });
        if (existing) {
            return res.status(409).json({ success: false, message: "Admin already exists" });
        }
        const admin = await Admin.create({ email: "admin@realestate.com", password: "admin123" });
        return res.status(201).json({ success: true, message: "Default admin created", email: admin.email });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};
