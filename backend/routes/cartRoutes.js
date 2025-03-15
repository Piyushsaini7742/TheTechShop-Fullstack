const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

router.get("/", async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("productId", "name price image");
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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

module.exports = router;
