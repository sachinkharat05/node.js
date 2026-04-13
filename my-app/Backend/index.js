const express = require("express");
const cors = require("cors");

const app = express(); // ✅ ONLY ONE TIME

// Middleware
app.use(cors()); // ✅ CORS FIX
app.use(express.json());

// DB
const db = require("./connectivity/db");

// Modules
const SmeRepository = require("./repositories/sme-repository");
const SmeService = require("./services/sme-service");
const SmeController = require("./controllers/sme-controller");
const SmeRouterFactory = require("./routers/sme-router");

// Dependency Injection
const smeRepository = new SmeRepository(db);
const smeService = new SmeService(smeRepository);
const smeController = new SmeController(smeService);
const smeRouter = SmeRouterFactory(smeController);

// Routes
app.use("/api/sme", smeRouter);

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});