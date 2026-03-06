import express from "express";
import {
  createBiodata,
  getBiodata,
  updateBiodata,
} from "../controllers/biodataController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createBiodata);
router.get("/", protect, getBiodata);
router.put("/:id", protect, updateBiodata);

export default router;
