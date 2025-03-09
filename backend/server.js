const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

// ✅ Configure CORS to Allow Frontend Requests
app.use(
  cors({
    origin: "https://frontend-pjqsflfi9-piyush-sainis-projects.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Allow cookies, authentication headers, etc.
  })
);

// ✅ Test Route (Fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ API Routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
