import express from "express";
import { upload } from "../config/multer.js";
import { verifyAdminToken } from "../middleware/authAdmin.js";
import {
    addProperty,
    getProperties,
    getPropertyById,
    deleteProperty,
    getPropertyStats,
} from "../controllers/propertyController.js";

const router = express.Router();

// Public
router.get("/", getProperties);
router.get("/stats", getPropertyStats);
router.get("/:id", getPropertyById);

// Admin only
router.post("/add", verifyAdminToken, upload.array("images", 20), addProperty);
router.delete("/:id", verifyAdminToken, deleteProperty);

export default router;
