const express=require('express');
const router=express.Router();
const {getPosts}=require('../Controllers/PostController')
const isAuth=require('../midelware/isAuth')

router.get('/',isAuth,getPosts)



module.exports=router
