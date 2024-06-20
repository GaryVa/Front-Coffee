import React from "react";
import { AuthContext } from "../auth/AuthContext";
import { loginAccount } from "../services/api";


function LoginPage(){

    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {setToken} = React.useContext(AuthContext);
    
    const login = async()=>{
        const resp = await loginAccount({username:username, password:password});
        if(resp){
            await setToken(resp.token);
        } else{
            console.log(resp);
        }
    }

    return (
        <div >
        <div >
        <h1 >
            Iniciar Sesion
          </h1>
          <form  onSubmit={login}>
            <div>
              <label htmlFor="email" >
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
    );
}

export {LoginPage}