var http = require('http'); // step 1
var fs = require('fs');    // step 2

var onRequestHandler = function(req , res){     // step 4

    var pathName = "./"+ req.url; // whatever is in the url will be stored in pathName variable
    console.log(pathName);

    // arrow function 
    // also called as lambda function
    // to write one function inside another function
    
    fs.readFile(pathName,(err,data)=>{     // step 5
        if(err){
            console.log("Something has gone wrong");
            console.log(err);

            res.writeHead(404,{'Content-Type':'text/html'});
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
        }
        res.end();
    });

};

var server = http.createServer(onRequestHandler);  // step 3
server.listen(9997);                                    // step 6

console.log("HTTP server is listening on 9997 port")


