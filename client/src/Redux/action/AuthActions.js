import axios from "axios"
import {USER_RGISTER,USER_FAIL} from "../Types"
export const register=(user)=>async(dispatch)=>{
    console.log(user)
    console.log('lunched')
    try {
        const response=await axios.post('auth/register',user)
        dispatch({type:USER_RGISTER,payload:response.data})
    } catch (error) {
        dispatch({type:USER_FAIL})
    }
}