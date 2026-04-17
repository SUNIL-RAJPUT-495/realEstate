import express from "express";
import { createAppraisal, getAppraisals } from "../controllers/appraisalController.js";
import { verifyAdminToken } from "../middleware/authAdmin.js";

const router = express.Router();

router.post("/", createAppraisal);
router.get("/", verifyAdminToken, getAppraisals);

export default router;
