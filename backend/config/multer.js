import multer from "multer";
import path from "path";

// ⚠️ Vercel serverless has NO writable filesystem.
// Use memoryStorage so uploads are held in memory (req.files[].buffer).
// For production image hosting, pipe these buffers to Cloudinary or AWS S3.
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true);
    }
    cb(new Error("Only image files are allowed!"));
};

export const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB per file
});
