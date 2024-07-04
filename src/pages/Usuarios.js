import React from "react";
import { Tabla } from "../components/tabla";
import { Bloquear, ListarUsuarios } from "../services/api";


function Usuarios(){
    const [usuarios, setUsuarios] = React.useState([]);
    const [contador, setContador] = React.useState(0);

    React.useEffect(() => {
        async function obtenerUsuarios(){
            const data = await ListarUsuarios();
            if (data) {
                setUsuarios(data);
            } else {
                setUsuarios([]);
            }
        }
        obtenerUsuarios();
    }, [contador]);

    const desabilitar = async (username, accion) => {
        try {
            const envio = {
                username: username,
                disabled: !accion
            }
            const resp = await Bloquear(envio);
            if (resp) {
                setContador(contador+1)
            }
        } catch (error) {
            console.log("no desabilitado");
        }
    }
    const bloqueo = async (username, accion) => {
        try {
            const envio = {
                username:username,
                locked:!accion
            }

            const resp = await Bloquear(envio);
            if (resp) {
                setContador(contador+1)
            }
        } catch (error) {
            console.log("no desabilitado");
        }
    }

    const userColumnas = [
        { key: "username", Header:"Username"},
        { key: "email", Header:"Email"},
        { key: "disabled", Header:"Disabled"},
        { key: "locked", Header:"Locked"}
    ]


    return <>
        <Tabla
            column={userColumnas}
            datos={usuarios}
            action={[
                { label: 'Desabilitar', onClick: (item) => desabilitar(item.username, item.disabled) },
                { label: 'Bloquear', onClick: (item) => bloqueo(item.username, item.locked) }
            ]}
        />
    </>
}

export {Usuarios}