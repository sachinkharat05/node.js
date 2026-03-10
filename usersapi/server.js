var express = require('express');
var app = express();
var userRouter=require('./routers/userrouter'); 
var path=require('path');
var cors=require('cors');
var bodyParser=require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/users',userRouter);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});