var connection = require('../config/db');    
exports.addUsers=(firstname, lastname,contactNo,email,password,result)=>{
    var sql = "INSERT INTO users(first_name,last_name,contact,email,password_hash) values (?,?,?,?,?)";
    connection.query(sql, [firstname, lastname,contactNo,email,password],result);
};
exports.getAllUsers=(result)=>{
    var sql = "SELECT * FROM users";
    connection.query(sql, result);
};