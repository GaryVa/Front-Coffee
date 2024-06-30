import React from "react";
import { AuthContext } from "../auth/AuthContext";
import { loginAccount } from "../services/api";
import { useNavigate } from "react-router-dom";


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
        <div >
        <div >
        <h1 >
            Iniciar Sesion
          </h1>
          <form  onSubmit={login}>
            <div>
              <label htmlFor="username" >
                usuario
              </label>
              <input
                type="Text"
                name='username'
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Contraseña'
              />
            </div>
            <div>
              <button type="submit" >
                Acceder
              </button>
            </div>
          </form>
        </div>
      </div>
      </>
}

export {LoginPage}