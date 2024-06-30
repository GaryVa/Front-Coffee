import { jwtDecode } from "jwt-decode";
import React from "react";



export const AuthContext = React.createContext();

export function AuthProvider({children}){
    const [auth, setAuth] = React.useState({token:null});
    const [role, setRole] = React.useState("");
    React.useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            setAuth({token:token})
            setRole(jwtDecode(token).role)
        }
    }, [])

    const setToken = async (token)=>{
        localStorage.setItem("token", token);
        localStorage.setItem("role", jwtDecode(token).role)
        setAuth({token:token});
        setRole(jwtDecode(token).role);
    }

    const logout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setAuth({token:null});
        setRole("");
    }

    return <AuthContext.Provider value={{auth, setToken, role, logout}}>
        {children}
    </AuthContext.Provider>


}