const jwt = require("jsonwebtoken");
const User=require('../models/User')
const isAuth=async(request,response,next)=>{
    try {
        const token=request.header('token')
    const verifyToken=await jwt.verify(token,process.env.KEY);
    if(!verifyToken) {
        return response.status(401).json({message:'you are authorized'})
    }
    console.log(verifyToken)
    request.userId=verifyToken.id
    
    next();
    } catch (error) {
        console.log(error)
    }
    
    
}
module.exports=isAuth