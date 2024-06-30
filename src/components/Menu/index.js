import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import React from "react";
import "./index.css"

function Menu(){
    
    const {auth, logout, role} = React.useContext(AuthContext);

    if (auth.token){
        routes.splice(0, routes.length);
        routes.push({to:"/", text:"Inicio"})
        routes.push({to:"/Coffees", text:"Coffees"})
        routes.push({to:"/acercaDe", text:"Acerca de"})
        
        if (role === "ADMIN"){
            routes.push({to:"/Gestion-coffee", text:"Gestion coffee"})
            routes.push({to:"/Clientes", text:"Clientes"})
        }
    }

    const cerrarSession = ()=>{
        logout();
        routes.splice(0, routes.length);
        routes.push({to:"/", text:"Inicio"})
        routes.push({to:"/Coffees", text:"Coffees"})
        routes.push({to:"/acercaDe", text:"Acerca de"})
        routes.push({to:"/login", text:"Iniciar session"})
        routes.push({to:"/registro", text:"Registrarse"})
    }

    return <>
    <div className="Menu">
        <div className="logo">
        </div>

        <div className="botones">
            {
             routes.map( (item, index)=>(
                    <NavLink
                        key={index} 
                        to={item.to}
                        className={"buton"}>
                        {item.text}
                    </NavLink>
             ) )
            }

            {
            auth.token?
            <button className="buton" onClick={cerrarSession}>Salir</button>:
            ""
            }
        </div>
        </div>
    </>
}

const routes = [];
routes.splice(0, routes.length);
routes.push({to:"/", text:"Inicio"})
routes.push({to:"/Coffees", text:"Coffees"})
routes.push({to:"/acercaDe", text:"Acerca de"})
routes.push({to:"/login", text:"Iniciar session"})
routes.push({to:"/registro", text:"Registrarse"})
export {Menu}