const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add products manually (ONLY RUN ONCE)
router.post("/add", async (req, res) => {
  const sampleProducts = [
    { name: "Laptop", price: 50000, image: "laptop.jpg" },
    { name: "Mouse", price: 1000, image: "mouse.jpg" },
    { name: "Keyboard", price: 2000, image: "keyboard.jpg" },
  ];

  await Product.insertMany(sampleProducts);
  res.json({ message: "Products added!" });
});

module.exports = router;
