const express = require("express");
const app = express();

app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
    res.send("Server running...");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
