const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "AceMock server is running! 🚀" });
});

// Test DB connection
const pool = require("./db");
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection failed ❌", err);
  } else {
    console.log("Database connected successfully ✅", res.rows[0]);
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});