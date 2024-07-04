import React from "react";
import "./index.css";
import CreateTestimonio from "../testimonios/TestimoniosPage";
import { listarTestimonios } from "../../services/api";

function CoffeeList(props){
    const [mostrarModal, setMostrarModal] = React.useState(false);
    const [testimonios, setTestimonios] = React.useState([]);

    const handleMostrarModal = async (id) => {
        const data = await listarTestimonios(id);
        setTestimonios(data)
        setMostrarModal(true);
    }

    const handleCerrarModal = () => {
        setMostrarModal(false);
    }

    const maxCofe = props.maxCofe || props.cafes.length;
    
return <>
    <h1 className="titulo">Los mejores cafes para ti</h1>
    <div className="cards"> 
        {props.cafes && props.cafes.length > 0 ?
        props.cafes.slice(0, maxCofe).map((item) => (
            <div key={item.idCoffee} className="card">
                <img
                    className="imagen"
                    src={`data:image/jpeg;base64,${item.image64}`}
                    alt={item.name}
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {props.button?
                <button 
                type="button" 
                className="button-tarjeta"
                onClick={()=> handleMostrarModal(item.idCoffee)}>
                    Testimonios
                    </button>
                :""}
            </div>
        )) : (
            <h1>no hay cofe</h1>
        )}
    </div>
    <CreateTestimonio 
        mostrar={mostrarModal}
        onClose={handleCerrarModal}
        content={testimonios}
    />
</>
}

export {CoffeeList};