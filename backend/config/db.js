import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let isConnected = false;

const connectDB = async () => {
    if (isConnected) return; // reuse connection across serverless invocations
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) throw new Error("MONGO_URI environment variable is not set");
        await mongoose.connect(uri);
        isConnected = true;
        console.log("✅ MongoDB connected successfully");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
        // Do NOT call process.exit(1) — it crashes the entire Vercel function
        throw err;
    }
};

export default connectDB;
