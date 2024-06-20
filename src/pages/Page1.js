import React from "react";
import { Coffees } from "../services/api";

function Page1() {

    const [coffees, setCoffees] = React.useState([]);

    React.useEffect(() => {
        async function obtenerCoffees() {
            const data = await Coffees();
            if (data) {
                setCoffees(data);
            } else {
                setCoffees([]);
            }
        }
        obtenerCoffees();
    }, []);

    return (
        <>
            <h3>Lista de Cafés</h3>
            {coffees.length === 0 ? (
                <p>No hay cafés disponibles.</p>
            ) : (
                coffees.map((item) => (
                    <div key={item.idCoffee}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p>Precio: ${item.price}</p>
                        {item.image64 && (
                            <img 
                                src={`data:image/jpeg;base64,${item.image64}`} 
                                alt={item.name} 
                                style={{width: '200px', height: 'auto'}} 
                            />
                        )}
                    </div>
                ))
            )}
        </>
    );
}

export { Page1 };
