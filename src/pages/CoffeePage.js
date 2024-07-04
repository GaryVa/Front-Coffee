import React from "react";
import { CoffeeList } from "../components/coffees";
import { Coffees, buscarCoffee } from "../services/api";
import "./CoffeePage.css"



function Coffee() {
    const [cafes, setCafes] = React.useState([]);
    const [nombre, setNombre] = React.useState("");
    const [cont, setCont] = React.useState("");

    
    React.useEffect(() => {
        async function obtenerCoffees() {
            const data = await Coffees();
            if (data) {
                setCafes(data);
            } else {
                setCafes([]);
            }
        }
        obtenerCoffees();
    }, [cont]);

    const buscarCofe = async (value) => {
        const data = await buscarCoffee(value);
        setCafes(data);

    }
    const asignarNombre = (e) => {
        setNombre(e.target.value);
    }
    const busqueda = () => {
        buscarCofe(nombre);
    }

    const quitarFiltro = (e) => {
        setCont(cont+1);
        setNombre("");
    }

    const button = true;


    return <>

        <div className="barra-busqueda">
            <input
                type="text"
                name='buscar'
                value={nombre}
                onChange={asignarNombre}
                placeholder='Ingrese el nombre del cafe a buscar'
            />
            <button onClick={busqueda}>Buscar</button>
            <button onClick={quitarFiltro}>Quitar filtro</button>
        </div>
    
        <div className="Card-contenedor">
            <CoffeeList
                button = {button}
                cafes = {cafes}
            />
        </div>

    </>
}

export { Coffee };
