import React from "react";
import { AuthContext } from "../auth/AuthContext";
import { loginAccount } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Registro.css"


function LoginPage(){

    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {setToken} = React.useContext(AuthContext);
    const navigate = useNavigate();
    
    const login = async(e)=>{
        try{
            e.preventDefault();
            const resp = await loginAccount({username:username, password:password});
            if(resp){
                await setToken(resp.token);
                navigate("/");
            } else{
                console.log(resp);
            }
        } catch (error) {
            console.log("error inicio de seccion", error);
        }

    }

    return <>
        <div className="contenedor">
          <form className="fomularioSession" onSubmit={login}>
          <h1 className="hSession">Iniciar Sesion</h1>
            <div>
              <label className="labelSession">Usuario</label>
              <input
                className="inputSession"
                type="Text"
                name='username'
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Nombre"
              />
            </div>
            <div>
              <label className="labelSession">Contraseña</label>
              <input
                className="inputSession"
                type="password"
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Contraseña'
              />
            </div>
            <div>
              <button className="botonSession" type="submit">Acceder</button>
            </div>
          </form>
        </div>
      </>
}

export {LoginPage}