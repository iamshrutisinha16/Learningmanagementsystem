import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import courseRoutes from "./routes/courseRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(
  cors({
    origin: "https://learningmanagementsystem-red.vercel.app/", 
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// Health / Default Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🎯 LMS Backend API is running",
  });
});

// Start Server AFTER DB Connect
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
