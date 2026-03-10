var mysql = require('mysql2');

var dbserver={
    host: "localhost",
    user: "root",
    password : "root123",
    database : "membership_db"
}

var connection = mysql.createConnection(dbserver);
connection.connect(function(err){
    if(err){
        console.log("connection failed:"+err)
    }
    else{
        console.log("connection succesful");
    }
});

module.exports =connection ;