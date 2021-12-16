import {USER_RGISTER,USER_FAIL,GET_USER,USER_LOGIN,LOG_OUT} from "../Types"
const iniState={user:null,loading:true,isAuth:false }

const AuthReducer=(state=iniState,action)=>{
    switch (action.type){
       case USER_RGISTER :
           localStorage.setItem("token", action.payload.token)
           return {...state,user:action.payload.newUser,loading:false,isAuth:true}
      case GET_USER:
          return  {...state,user:action.payload.user,lodaing:false,isAuth:true}
          case USER_LOGIN:
            localStorage.setItem("token", action.payload.token)
            return {...state,user:action.payload.searchedUser,loading:false,isAuth:true}
         case LOG_OUT:
         case USER_FAIL :
            localStorage.removeItem("token")
            return {...state,user:null,isAuth:false} 
    default :
    return state
}
}
export default AuthReducer