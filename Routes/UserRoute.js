const express=require('express');
const router=express.Router();
const {registerController,loginController}=require('../Controllers/authController');
const {registrationValidation,validation,loginValudation}=require('../midelware/validation')

router.post('/register',registrationValidation,validation,registerController);
router.post('/login',loginValudation,validation,loginController)
module.exports=router;
