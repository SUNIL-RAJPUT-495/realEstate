import Property from "../models/Property.js";
import path from "path";


// POST /api/property/add  (handles both rent & sell via type field)
export const addProperty = async (req, res) => {
    try {
        const { title, address, type, status, category, price, beds, baths, cars, badge } = req.body;

        if (!title || !address || !type || !price) {
            return res.status(400).json({ success: false, message: "title, address, type and price are required" });
        }

        // With memoryStorage, files are in req.files[].buffer
        // Convert to base64 data URI for storage (use Cloudinary/S3 for production)
        const images = req.files
            ? req.files.map((f) => {
                  const b64 = f.buffer.toString("base64");
                  return `data:${f.mimetype};base64,${b64}`;
              })
            : [];

        const property = await Property.create({
            title,
            address,
            type,
            status: status || (type === 'rent' ? 'For Rent' : 'For Sale'),
            category: category || 'new',
            price,
            beds: Number(beds) || 0,
            baths: Number(baths) || 0,
            cars: Number(cars) || 0,
            images,
            badge: badge || null,
        });

        return res.status(201).json({ success: true, message: "Property added successfully", property });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

// GET /api/property?type=rent|sell
export const getProperties = async (req, res) => {
    try {
        const filter = { isActive: true };
        if (req.query.type)     filter.type     = req.query.type;
        if (req.query.status)   filter.status   = req.query.status;
        if (req.query.category) filter.category = req.query.category;

        const properties = await Property.find(filter).sort({ createdAt: -1 });
        return res.status(200).json({ success: true, properties });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

// GET /api/property/:id
export const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) return res.status(404).json({ success: false, message: "Property not found" });
        return res.status(200).json({ success: true, property });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

// DELETE /api/property/:id
export const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) return res.status(404).json({ success: false, message: "Property not found" });
        // Images are stored as data URIs (no disk files to delete)
        return res.status(200).json({ success: true, message: "Property deleted" });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

// GET /api/property/stats  (dashboard card counts)
export const getPropertyStats = async (req, res) => {
    try {
        const totalRent = await Property.countDocuments({ type: "rent", isActive: true });
        const totalSell = await Property.countDocuments({ type: "sell", isActive: true });
        const total = await Property.countDocuments({ isActive: true });
        return res.status(200).json({ success: true, totalRent, totalSell, total });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};
