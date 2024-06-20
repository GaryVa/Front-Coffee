import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import React from "react";


function PrivateRoute({children}){
    const {auth} = React.useContext(AuthContext);
    const location = useLocation();

    return auth.token?(children):<Navigate to={"/login"} replace={{path: location.pathname}}></Navigate>
}

export {PrivateRoute};