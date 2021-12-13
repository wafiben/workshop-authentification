const getPosts=async(request,response)=>{
    try {
        response.status(200).json({message:'hello'})
    } catch (error) {
        response.status(500).json({error:'failed'})
    }
    
}
module.exports={getPosts}