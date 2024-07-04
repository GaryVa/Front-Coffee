import React from "react";
import { CoffeeList } from "../components/coffees";
import { Coffees } from "../services/api";
import portadaImagen from "../img/CofePortada.png"
import "./Home.css";


function Home(){
    const [cafes, setCafes] = React.useState([]);
    
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
    }, []);

    const button = false;


    return <>

        <div className="Portada">
            <div className="textoPortada">
                <h2>El cafe mas delicioso de la ciudad</h2>
            </div>
            <div className="imagenPortada">
                <img src={portadaImagen} alt="imagen portada"></img>
            </div>
        </div>
    
        <div className="Card-contenedor">
            <CoffeeList
                button = {button}
                cafes = {cafes}
                maxCofe = {3}
            />

        </div>

        <div className="testimonios">

        </div>
        <div className="sobre-nosotros">

        </div>

    </>
}


export {Home};