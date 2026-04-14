const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Dependency Injection Setup
const db = require("./config/db");
const AdminProfileService = require("./services/AdminProfileService");
const AdminProfileController = require("./controllers/AdminProfileController");

const adminProfileService = new AdminProfileService(db);
const adminProfileController = new AdminProfileController(adminProfileService);

// Routes
const AdminProfileRoutes = require("./routes/AdminProfileRoutes")(adminProfileController);
app.use("/api", AdminProfileRoutes);

// Server
const PORT = 5055;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});