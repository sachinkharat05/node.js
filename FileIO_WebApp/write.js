
var fs = require('fs');
var fileName = "./data/output.txt";

var dataToBeWritten = "This is the data to be written into the file from write.js .\n";  

var onFileWrite = function(err){
    if(err){
        throw err;
    }
    console.log("Content ha been sucessfully writtenn into files");
}

// first parameter : path of file i.e filename
// second parameter : data to be written into file
// third parameter : callback function name , which will be called automatically
// after write operation is done by system

fs.writeFile(fileName,dataToBeWritten,onFileWrite);

