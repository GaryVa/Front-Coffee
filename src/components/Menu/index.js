import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import React from "react";

function Menu(){
    
    const {auth, logout} = React.useContext(AuthContext);

    if (auth.token){
        routes.splice(0, routes.length);
        routes.push({to:"/", text:"Home"})
        routes.push({to:"/page1", text:"Pagina 1"})
        routes.push({to:"/page2", text:"Pagina 2"})
        routes.push({to:"/cursos", text:"Mis Cursos"})
        routes.push({to:"/nuevo-coffee", text:"Crear coffee"})
    }

    const cerrarSession = ()=>{
        logout();
        routes.splice(0, routes.length);
        routes.push({to:"/", text:"Home"})
        routes.push({to:"/page1", text:"Pagina 1"})
        routes.push({to:"/page2", text:"Pagina 2"})
        routes.push({to:"/cursos", text:"Mis Cursos"})
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

routes.push({to:"/", text:"Inicio"})
routes.push({to:"/page1", text:"Coffees"})
routes.push({to:"/page2", text:"Acerca de"})
routes.push({to:"/cursos", text:"Registarse"})
routes.push({to:"/login", text:"Iniciar session"})
routes.push({to:"/nuevo-coffee", text:"Crear coffee"})

export {Menu}