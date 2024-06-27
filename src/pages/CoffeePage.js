import React from "react";
import { CoffeeList } from "../components/coffees";


function Coffee() {



    return <>
    
        <div className="Card-contenedor">
            <CoffeeList render={(cafes) => (
                <div className="cards"> 
                    {cafes.map((item) => (
                        <div key={item.idCoffee} className="card">
                            {item.image64 && (
                                <img 
                                    src={`data:image/jpeg;base64,${item.image64}`}
                                    alt={item.nombre}
                                />
                            )}
                            <h3>{item.nombre}</h3>
                            <p>{item.description}</p>
                            <p>${item.price}</p>

                        </div>
                    ))}
                </div>
            )}/>

        </div>

    </>
}

export { Coffee };
