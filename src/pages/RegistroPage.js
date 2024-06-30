import { useNavigate } from "react-router-dom";
import { RegistroUser } from "../services/api";
import React from "react";


function Registro(){

    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const registrarUsarios = async(e) => {
        try {
            e.preventDefault();
            const datos = {
                username: username,
                password: password,
                email: email
            }
            const resp = await RegistroUser(datos);
            if (resp) {
                navigate("/login")
            } else {
                console.log("error de registro");
            }
        } catch (error) {
            console.log("error: ", error);
        }
    }

    return <>

    <div >
        <h1 >
            Registrarse
            </h1>
            <form  onSubmit={registrarUsarios}>
                <div>
                    <label htmlFor="username" >
                        usuario
                    </label>
                    <input
                        type="Text"
                        name='username'
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nombre"
                    />
                </div>
                <div>
                    <label htmlFor="email">
                        email
                    </label>
                    <input
                        type="email"
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
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
    </>

}

export {Registro}