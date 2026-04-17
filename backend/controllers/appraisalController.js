import Appraisal from "../models/Appraisal.js";

// @desc    Submit a new appraisal request
// @route   POST /api/appraisal
// @access  Public
export const createAppraisal = async (req, res) => {
    try {
        const appraisal = new Appraisal(req.body);
        const savedAppraisal = await appraisal.save();
        res.status(201).json({ success: true, data: savedAppraisal });
    } catch (error) {
        console.error("Error creating appraisal:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// @desc    Get all appraisal requests
// @route   GET /api/appraisal
// @access  Private/Admin
export const getAppraisals = async (req, res) => {
    try {
        const appraisals = await Appraisal.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: appraisals.length, data: appraisals });
    } catch (error) {
        console.error("Error fetching appraisals:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
