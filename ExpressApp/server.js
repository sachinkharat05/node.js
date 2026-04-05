// Express JS is a web application framework for Node JS 
// it is a readymade library , 
// it is a complete web application archetiecture used for building web application.

// when express module is called it makes a server internally
// and app is trying to capture it
var express = require('express');
var path = require('path');

// get global object from framework
// it contains http server 
var app = express();

// setting static folder for express application
var staticFolder = express.static(path.join(__dirname,"public"));
// express Framwwork Configuration
app.use(staticFolder); 

// express framework handlers --- mapping incoming requests to callback function
var get = app.get.bind(app); // creating shortcut for get method

// http handlers of GET 
// there are 4 http handlers 
// ----------for /
// ----------for /hello
// ----------for /flowers
// ----------for /customer

// first path : path
// second path : callback function

get("/",(request, response)=>{
    
    response.sendFile(__dirname+"/index.html");

});

app.get("/hello",(request, response)=>{
    var flower = {
        "id":1,
        "name":"Rose",
    };
    response.send(flower);
});

app.get("/flowers",(request, response)=>{
    var flowers = [
        {"id":1,"name":"Rose"},
        {"id":2,"name":"Jasmine"},
        {"id":3,"name":"Lily"},
    ];
    response.send(flowers);
})

app.get("/customer",(request, response)=>{
    var customer = [
        {"id":1,"name":"Rajendra","city":"Pune"},
        {"id":2,"name":"Suresh","city":"Mumbai"},
        {"id":3,"name":"Anil","city":"Banglore"},
    ];
    response.send(customer);
});
app.listen(9996);  // making this express application to listen on port no 9996
console.log("Express web application is listening on port no 9996");

