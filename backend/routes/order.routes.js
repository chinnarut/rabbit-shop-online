import express from "express";
import Order from "../models/Order.model.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// logged user order
router.get("/my-orders", protect, async (req, res) => {
  try {
    // find order for authenticated user, sort by latest orders
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// get order details
router.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
