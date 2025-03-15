const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config(); // Load environment variables

const app = express();
app.use(express.json());

// ✅ Improved CORS configuration
app.use(
  cors({
    origin: "*", // Allow all origins (For testing, change it to your frontend URL later)
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// ✅ Import and use routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
