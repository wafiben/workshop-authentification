import React from 'react';
import { Navigate } from 'react-router'; 
const PrivateRoute = ({children,isAuth}) => {
    const token=localStorage.getItem("token");
    return (
        <div>
            {
                token ? children : <Navigate to="/sign-in"/>
            }
        </div>
    )
}

export default PrivateRoute
