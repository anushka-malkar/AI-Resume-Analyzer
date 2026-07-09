const express = require("express");

const router = express.Router();

const upload = require("../config/multer");
const authMiddleware = require("../middleware/authMiddleware");

const {
  uploadResume,
  getResumeHistory,
  deleteResume,
  getDashboardStats,
} = require("../controllers/resumeController");

// Upload and analyze resume
router.post(
  "/upload",
  authMiddleware,
  upload.single("resume"),
  uploadResume
);

// Get resume history
router.get(
  "/history",
  authMiddleware,
  getResumeHistory
);

router.get(
  "/stats",
  authMiddleware,
  getDashboardStats
);

router.delete(
  "/:id",
  authMiddleware,
  deleteResume
);

module.exports = router;