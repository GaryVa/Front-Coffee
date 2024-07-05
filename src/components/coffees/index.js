import React from "react";
import "./index.css";
import CreateTestimonio from "../testimonios/TestimoniosPage";
import { crearTestimonios, listarTestimonios } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function CoffeeList(props){
    const [mostrarModal, setMostrarModal] = React.useState(false);
    const [testimonios, setTestimonios] = React.useState([]);
    const [accion, setAccion] = React.useState(true);
    const [idCofe, setIdCofe] = React.useState("");

    const cardTestimonios = async (id) => {
        setAccion(false);
        const data = await listarTestimonios(id);
        setTestimonios(data);
        setMostrarModal(true);
    }
    const agregar = (id)=> {
        setIdCofe(id);
        setAccion(true);
        setMostrarModal(true);
    }
    const agregarTestimonios = async (datos) => {
        try {
            const resp = await crearTestimonios(datos);
            if (resp) {
                toast("Testimonio agregado con exito");

            }
        } catch (error) {
            toast.error("Fallo al agregar el testimonio");
        }
    }

    const maxCofe = props.maxCofe || props.cafes.length;
    
return <>
    <h1 className="titulo">Los mejores cafes para ti</h1>
    <div className="cards"> 
        {props.cafes && props.cafes.length > 0 ?
        props.cafes.slice(0, maxCofe).map((item) => (
            <div key={item.idCoffee} className="card">
                <div className="card-imagen">
                    {props.button && localStorage.getItem("token")?
                    <button onClick={() => agregar(item.idCoffee)} className="agregar-testimonio">+</button>
                    : ("")}
                    <img
                        className="imagen"
                        src={`data:image/jpeg;base64,${item.image64}`}
                        alt={item.name}
                    />
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {props.button?
                <p>{item.price}</p>
                : "" }
                
                {props.button?
                <button 
                    type="button" 
                    className="button-tarjeta"
                    onClick={()=> cardTestimonios(item.idCoffee)}>
                        Testimonios
                </button>
                :""}
            </div>
        )) : (
            <h2>No hay cofe</h2>
        )}
    </div>
    <CreateTestimonio 
        mostrar={mostrarModal}
        onClose={()=> setMostrarModal(false)}
        agregar={agregarTestimonios}
        content={testimonios}
        accion={accion}
        idCoffee={idCofe}
    />
    <ToastContainer />
</>
}

export {CoffeeList};