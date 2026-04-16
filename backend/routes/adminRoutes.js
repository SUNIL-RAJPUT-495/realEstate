import express from "express";
import { adminLogin, seedAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/seed", seedAdmin);   

export default router;
