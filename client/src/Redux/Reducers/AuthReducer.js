import {USER_RGISTER,USER_FAIL} from "../Types"
const iniState={user:null,loading:true,isAuth:false}

const AuthReducer=(state=iniState,action)=>{
    switch (action.type){
       case USER_RGISTER :
           localStorage.setItem("token", action.payload.token)
           return {...state,user:action.payload.newUser,loading:false,isAuth:true}
        case USER_FAIL :
            localStorage.removeItem("token")
            return {...state,isAuth:false}
    }
    return state
}
export default AuthReducer