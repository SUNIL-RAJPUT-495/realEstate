import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let connectionPromise = null;

const connectDB = async () => {
    if (mongoose.connection.readyState === 1) return mongoose.connection; // already connected
    if (connectionPromise) return connectionPromise; // connection in progress

    try {
        const uri = process.env.MONGO_URI;
        if (!uri) throw new Error("MONGO_URI environment variable is not set");
        connectionPromise = mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000,
        });
        await connectionPromise;
        console.log("✅ MongoDB connected successfully");
        return mongoose.connection;
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
        connectionPromise = null;
        // Do NOT call process.exit(1) — it crashes the entire Vercel function
        throw err;
    }
};

export default connectDB;
