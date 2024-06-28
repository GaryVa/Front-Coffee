import React from "react";
import { CoffeeList } from "../components/coffees";
import { Coffees } from "../services/api";


function Coffee() {
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


    return <>
    
        <div className="Card-contenedor">
            <CoffeeList
                cafes = {cafes}
            />

        </div>

    </>
}

export { Coffee };
