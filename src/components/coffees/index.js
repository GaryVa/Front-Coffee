import React from "react";
import { Coffees } from "../../services/api";

function CoffeeList({render}){
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

    return render(cafes);
}

export {CoffeeList};