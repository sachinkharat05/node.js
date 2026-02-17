const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

exports.verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).json({ message: "Token Required" });
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid Token" });
        }

        req.user = decoded;
        next();
    });
};
