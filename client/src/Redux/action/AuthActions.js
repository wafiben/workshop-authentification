import axios from "axios"
import {USER_RGISTER,USER_FAIL,GET_USER,USER_LOGIN,LOG_OUT} from "../Types"
export const register=(user,navigate)=>async(dispatch)=>{
    try {
        const response=await axios.post('auth/register',user)
        dispatch({type:USER_RGISTER,payload:response.data});
        navigate('/profile');
    } catch (error) {
        dispatch({type:USER_FAIL})
        error.response.data.errors.map(err=>alert(err.msg))
    }
}
export const getUser=()=>async(dispatch)=>{
    const config={
        headers:{
            "token":localStorage.getItem("token")
        }
    }
    try {
        const response=await axios.get('auth/current',config)
        console.log(response.data)
        dispatch({type:GET_USER,payload:response.data})
    } catch (error) {
        dispatch({type:USER_FAIL})
        error.response.data.errors.map(err=>alert(err.msg))
       
    }
}
export const login=(user,navigate)=>async(dispatch)=>{
    try {
       
        const response=await axios.post('auth/login',user)
        dispatch({type:USER_LOGIN,payload:response.data});
        navigate('/profile')
    } catch (error) {
        dispatch({type:USER_FAIL})
        error.response.data.errors.map(err=>alert(err.msg))
    }
}
export const logOut=()=>{
 return {type:LOG_OUT}
}




