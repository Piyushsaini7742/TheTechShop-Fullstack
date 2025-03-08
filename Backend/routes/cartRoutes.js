const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// ✅ Get cart items with product details
router.get("/", async (req, res) => {
  try {
    const cartItems = await Cart.find().populate({
      path: "productId",
      select: "name price image", // Only fetch needed fields
    });

    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Add item to cart (If exists, increase quantity)
router.post("/", async (req, res) => {
  try {
    const { productId } = req.body;
    let cartItem = await Cart.findOne({ productId });

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cartItem = new Cart({ productId, quantity: 1 });
    }

    await cartItem.save();
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Remove a single item from cart (Safe check added)
router.delete("/:id", async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id);

    if (!cartItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    await cartItem.deleteOne();
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Clear entire cart
router.delete("/", async (req, res) => {
  try {
    await Cart.deleteMany({});
    res.json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
