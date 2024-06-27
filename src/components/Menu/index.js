import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import React from "react";

function Menu(){
    
    const {auth, logout} = React.useContext(AuthContext);

    if (auth.token){
        routes.splice(0, routes.length);
        routes.push({to:"/", text:"Home"})
        routes.push({to:"/Coffees", text:"Coffees"})
        routes.push({to:"/Gestion-coffee", text:"Gestion coffee"})
        
    }

    const cerrarSession = ()=>{
        logout();
        routes.splice(0, routes.length);
        routes.push({to:"/", text:"Home"})
        routes.push({to:"/Coffees", text:"Coffees"})
        routes.push({to:"/login", text:"Iniciar session"})
    }

    return <>
        <h2>Menu</h2>
        <ul>
            {
             routes.map( (item, index)=>(
                <li key={index}>
                    <NavLink 
                        style={({isActive}) => ({color:isActive?"green":"blue"})}
                        to={item.to}>
                        {item.text}
                    </NavLink>
                </li>
             ) )
            }

            {
            auth.token?
            <button onClick={cerrarSession}>Salir</button>:
            ""
            }
        </ul>

    </>
}

const routes = [];
routes.splice(0, routes.length);
routes.push({to:"/", text:"Home"})
routes.push({to:"/Coffees", text:"Coffees"})
routes.push({to:"/login", text:"Iniciar session"})
export {Menu}