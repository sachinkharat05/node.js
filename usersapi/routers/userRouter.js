const express = require('express');
const router = express.Router();
var userController=require('../controllers/usercontroller');
router.post('/addusers',userController.addUsers);
router.get('/getallusers',userController.getAllUsers);
module.exports=router;