const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

// ✅ Fix CORS to Allow Frontend
app.use(
  cors({
    origin: "*", // Allow all origins (change to frontend URL for security)
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

// ✅ API Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ API Routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
