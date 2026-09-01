const mysql = require("mysql2");
//npm install mysql2
const connection = mysql.createConnection({
    host: "127.0.0.1",         // Changed from "students" to the IP address
    user: "root",
  // Replace with your actual MySQL root password
    database: "flowershop",     // Ensure this database exists on your MySQL server
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.log("MySQL connection failed:", err.message);
        return;
    }

    console.log("MySQL connected successfully!");
});