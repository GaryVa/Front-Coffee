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

        <div className="sobre-nosotros">
            <div className="descripcion-nosotros">
                <h1>Coffee Cafe</h1>
                <p>
                    Crafted Coffee, Cozy Vibes, Unforgettable Moments <br/>
                    Your Perfect Espresso Escape
                </p>
            </div>
            <div className="link-nosotros">
                <h1>Footer Links</h1>
                <a href="/">Home</a>
                <a href="#/">About</a>
                <a href="#/">Contact</a>
                <a href="#/">Blog</a>
            </div>
            <div className="adrreess">
                <h1>Address</h1>
                <p>UCM, talca</p>
                <p>+56 9 1234 5678</p>
            </div>
        </div>

    </>
}


export {Home};