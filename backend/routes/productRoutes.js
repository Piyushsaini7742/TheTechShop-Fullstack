const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// ✅ Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "❌ Error fetching products" });
  }
});

// ✅ Add a sample product (for testing)
router.post("/add", async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    const newProduct = new Product({ name, price, description, image });
    await newProduct.save();

    res.status(201).json({ message: "✅ Product added!", product: newProduct });
  } catch (error) {
    res.status(500).json({ error: "❌ Error adding product" });
  }
});

module.exports = router;
