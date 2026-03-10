const{request,response}=require('express');
var userService=require('../services/usersService');
exports.addUsers=(request,response)=>{
    const{firstname, lastname,contactNo,email,password}=request.body;
    userService.addUsers(firstname, lastname,contactNo,email,password,(err,result)=>{
        if(err){
            return response.status(500).json({message:"Error adding user"});
        }
        return response.status(201).json({message:"User added successfully"});
    });
};
exports.getAllUsers=(request,response)=>{
    userService.getAllUsers((err,result)=>{
        if(err){    
            return response.status(500).json({message:"Error fetching users"});
        }
        return response.status(200).json(result);
    });
};