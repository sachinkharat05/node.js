var fs = require('fs');
var fileName1 = "./data/data.txt";
var fileName2 = "./data/result.txt";

// here "." means currebnt folder 2 . dots means 2 folder above this folder

// callback function 
var onFileRead = function(err , data){
// when the particular file in not available error will bw sent in err variable
// and msg can be print when error occuras

    if(err){
        console.log("--------------Something has gone wrong--------------");
    }  // when gone wrong this msg will appear

// when the file is read successfully data will be sent in data variable
    console.log("-------Data from file available : ");
    console.log(data.toString());  // to convert the text into string 

}

fs.readFile(fileName1,onFileRead); // These is non blocking call
fs.readFile(fileName2,onFileRead);

// fs.readFile is a inbuilt function to read files asynchronously in Node.js

console.log("Terminating Node JS application");
// This line will execute first before reading the file as file reading is asynchronous operation