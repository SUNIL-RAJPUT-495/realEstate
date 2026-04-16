import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ 
  origin: [
    "https://real-estate-client-lime.vercel.app",
    "http://localhost:5174",
    process.env.FRONTEND_URL
  ], 
  credentials: true 
}));

app.use(express.json());
app.use(morgan("dev"));

// Serve uploaded images (Vercel par ye local folder kaam nahi karega - aage padhein)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/property", propertyRoutes);

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Real Estate backend on Vercel!" });
});

// Vercel Fix: Local testing ke liye listen karega, par Vercel par export use hoga
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

// Ye line Vercel ke liye sabse important hai!
export default app;