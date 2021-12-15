import React from 'react';
import { Navigate } from 'react-router'; 
const PrivateRoute = ({children,isAuth}) => {
   
    return (
        <div>
            {
                isAuth ? children : <Navigate to="/sign-in"/>
            }
        </div>
    )
}

export default PrivateRoute
