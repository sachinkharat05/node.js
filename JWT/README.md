🔐 JWT Authentication System (Node.js + MySQL)

This is a complete backend authentication project built using Node.js, Express, MySQL, JWT, and bcrypt.

It includes:

User Registration

User Login

Password Hashing

JWT Token Generation

Protected Routes (Dashboard)

👨‍💻 Author

Sachin Kharat
Backend Developer (Node.js Learner)

🚀 Features

Register new user

Login system with JWT

Password stored in hashed format

Secure API routes using middleware

MySQL database connection

🛠️ Technologies Used

Node.js

Express.js

MySQL

JWT (jsonwebtoken)

bcryptjs

Postman

VS Code

📂 Project Structure

JWT_AUTH/
│
├── config/
│ └── db.js
│
├── controllers/
│ └── authController.js
│
├── middleware/
│ └── authMiddleware.js
│
├── routes/
│ └── authRoutes.js
│
├── server.js
└── package.json

⚙️ Installation
1️⃣ Install Packages

npm install

2️⃣ Create Database

CREATE DATABASE auth_system;

USE auth_system;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(150) UNIQUE,
password VARCHAR(255)
);

3️⃣ Run Server

node server.js

Server runs on:
http://localhost:3000

📮 API Endpoints
🔹 Register

POST /api/auth/register

{
"name": "Sachin",
"email": "sachin@gmail.com",
"password": "123456"
}

🔹 Login

POST /api/auth/login

{
"email": "sachin@gmail.com",
"password": "123456"
}

Returns JWT Token.

🔹 Dashboard (Protected)

GET /api/auth/dashboard

Header:
Authorization: token_here

🔐 Authentication Flow

User registers

Password is hashed using bcrypt

User logs in

JWT token is generated

Token is used to access protected routes

📈 Future Improvements

Email validation

Better error handling

Role-based authentication

Logout system

Deploy on cloud. 
and updatr api data server