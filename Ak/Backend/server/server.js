const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Dependency Injection Setup
const db = require("./config/db");
const ProfileService = require("./services/ProfileService");
const ProfileController = require("./controllers/ProfileController");

const profileService = new ProfileService(db);
const profileController = new ProfileController(profileService);

// Routes
const profileRoutes = require("./routes/profileroutes")(profileController);
app.use("/api", profileRoutes);

// Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});