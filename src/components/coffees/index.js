import React from "react";
import "./index.css";

function CoffeeList(props){
    
return <>
    <h1 className="titulo">Los mejores cafes para ti</h1>
    <div className="cards"> 
        {props.cafes?.map((item) => (
            <div key={item.idCoffee} className="card">
                <img
                    className="imagen"
                    src={`data:image/jpeg;base64,${item.image64}`}
                    alt={item.name}
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
</>
}

export {CoffeeList};