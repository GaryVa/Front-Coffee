import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import React from "react";


function PrivateRoute({children}){
    const {auth, role} = React.useContext(AuthContext);
    const location = useLocation();

    if (!auth.token) {
        return <Navigate to={"/login"} state={{from: location}} replace />
    }

    const adminRutas = ["/Gestion-coffee", "/clientes"];

    if (role === "CLIENT" && adminRutas.includes(location.pathname)){
        return <Navigate to={"/"} state={{from: location}} replace />;
    }

    return <>{children}</>;

}

export {PrivateRoute};