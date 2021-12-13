const express=require('express');
const app=express()
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const userRoute=require('./Routes/UserRoute')
const PostRouter=require('./Routes/PostRouter');


//on n'ecrit pas le parametre path dans le config car le .env est de meme niveau que le index(entry point)
dotenv.config()
//midelware
app.use(express.json());
app.use('/auth',userRoute)
app.use('/post',PostRouter)
const port =9000

mongoose.connect(process.env.URL,(error)=>{
    if(error){
        console.log('connexion failed ')
    }
    console.log('database is connected')
})
app.listen(port,(error)=>{
if(error) console.log('failed to run ')
console.log(`server is running on port ${port}`  )
})
