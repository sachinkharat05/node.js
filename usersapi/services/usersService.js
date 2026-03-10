var user=require('../repositories/usersrepo');
exports.addUsers=(firstname, lastname,contactNo,email,password,result)=>{
    user.addUsers(firstname, lastname,contactNo,email,password,result);
};
exports.getAllUsers=(result)=>{
    user.getAllUsers(result);
};