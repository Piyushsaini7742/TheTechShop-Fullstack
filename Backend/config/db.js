const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/shop"); // ✅ Use 127.0.0.1 instead of ::1
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
