const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password", // 👉 XAMPP असेल तर empty ठेव
    database: "auth_system"
});

db.connect(err => {
    if (err) {
        console.log("DB Error:", err.message);
    } else {
        console.log("MySQL Connected");
    }
});

module.exports = db;