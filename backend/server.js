require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

// Configure CORS properly
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://frontend-pjqsflfi9-piyush-sainis-projects.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Test API route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Import and use routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
