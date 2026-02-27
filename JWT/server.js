const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Serve public folder
app.use(express.static(path.join(__dirname, "public")));

const authRoutes = require("./routes/authRoutes");

// API prefix
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});