const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// =====================
// MIDDLEWARE
// =====================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =====================
// SERVE PUBLIC FOLDER
// =====================
app.use(express.static("public"));

// =====================
// ROUTES
// =====================
const payheroRoutes = require("./routes/payhero");

// Use API prefix (recommended)
app.use("/api", payheroRoutes);

// =====================
// HEALTH CHECK (optional)
// =====================
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "PayHero STK Server is running 🚀"
    });
});

// =====================
// START SERVER
// =====================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});