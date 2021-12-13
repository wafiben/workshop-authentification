const jwt = require("jsonwebtoken");
const isAuth=async(request,response,next)=>{
    const token=request.header('token')
    const verifyToken=jwt.verify(token,process.env.KEY);
    if(!verifyToken) {
        return response.status(401).json({message:'you are authorized'})
    }
    request.userId=verifyToken.id
    next();
    
}
module.exports=isAuth