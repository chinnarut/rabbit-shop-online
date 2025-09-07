import express from "express";
import Product from "../models/Product.model.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// get all products (admin only)
router.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
