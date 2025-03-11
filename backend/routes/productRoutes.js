const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/add", async (req, res) => {
  const sampleProducts = [
    {
      name: "RGB Gaming Mechanical Keyboard",
      price: 2850,
      description: "High-quality mechanical keyboard with RGB lighting.",
      image: "https://imgs.search.brave.com/qaOcVuKdtr9uMwXJgLFIJMsYBnIrMu0vsrFMZxta_Xk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDgwOTI3/MDUuanBn",
    },
  ];
  await Product.insertMany(sampleProducts);
  res.json({ message: "Products added!" });
});

module.exports = router;
