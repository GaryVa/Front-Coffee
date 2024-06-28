import React from "react";

function CoffeeList(props){
    
return <>

    <div className="cards"> 
                    {props.cafes?.map((item) => (
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
</>
}

export {CoffeeList};