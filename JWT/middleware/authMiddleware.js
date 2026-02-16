const jwt = require("jsonwebtoken");

const SECRET_KEY = "mysecretkey";

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token Required" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid Token" });
    }
};
