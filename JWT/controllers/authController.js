const jwt = require("jsonwebtoken");
const db = require("../config/db");

const SECRET_KEY = "mysecretkey";

// REGISTER
exports.register = (req, res) => {
    const { username, password } = req.body;

    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";

    db.query(sql, [username, password], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({ message: "User Registered Successfully" });
    });
};

// LOGIN
exports.login = (req, res) => {
    const { username, password } = req.body;

    const sql = "SELECT * FROM users WHERE username=? AND password=?";

    db.query(sql, [username, password], (err, results) => {
        if (err) return res.status(500).json(err);

        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        const user = results[0];

        const token = jwt.sign(
            { id: user.id, username: user.username },
            SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.json({ message: "Login Successful", token });
    });
};
