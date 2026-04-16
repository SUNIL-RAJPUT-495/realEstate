import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    type: { type: String, enum: ["rent", "sell"], required: true },
    status: { type: String, enum: ["For Sale", "For Rent", "Auction"], default: "For Rent" },
    category: { type: String, enum: ["new", "open-soon", "upcoming"], default: "new" },
    price: { type: String, required: true },
    beds: { type: Number, default: 0 },
    baths: { type: Number, default: 0 },
    cars: { type: Number, default: 0 },
    images: [{ type: String }],   
    badge: { type: String, default: null },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Property = mongoose.model("Property", propertySchema);
export default Property;
