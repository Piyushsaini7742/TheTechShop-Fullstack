const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// ✅ Get cart items
router.get("/", async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("productId", "name price image");
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "❌ Error fetching cart items" });
  }
});

// ✅ Add to cart
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
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: "❌ Error adding to cart" });
  }
});

// ✅ Update cart item quantity
router.put("/:id", async (req, res) => {
  try {
    const { quantity } = req.body;
    const updatedCartItem = await Cart.findByIdAndUpdate(req.params.id, { quantity }, { new: true });

    res.status(200).json(updatedCartItem);
  } catch (error) {
    res.status(500).json({ error: "❌ Error updating cart item" });
  }
});

// ✅ Remove item from cart
router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "✅ Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: "❌ Error removing cart item" });
  }
});

module.exports = router;
