import React from "react";
import './Testimonios.css';
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const CreateTestimonio = (props) => {
    const [descripcion, setDescripcion] = React.useState("");

    if (!props.mostrar) return null;

    const llamarAgregar = async (e) => {
        e.preventDefault();
        const datos = {
            username: jwtDecode(localStorage.getItem("token")).sub,
            testimonials: descripcion,
            idCoffee: props.idCoffee
        }
        try{
            await props.agregar(datos);
            setDescripcion("");
        } catch (error) {
            toast.error("Error al crear el testimonio ", error);
        }
        
    }
    return (
        <div className="modal">
        <div className="modal-overlay">
            <span className="cerrar" onClick={props.onClose}>&times;</span>
            <h1>{props.accion?"Agregar testimonio":"Testimonios"}</h1>

            {props.accion? (
                <form onSubmit={llamarAgregar}>
                    <div className="agregado-testimonios">
                    <label>testimonio</label>
                    <textarea
                        type="text"
                        name='descripcion'
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        placeholder='Testimonio'
                        required
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                            }
                        }}
                    />
                    <div className="form-botones">
                        <button type="submit" className="boton-testimonio">Agregar</button>
                    </div>
                    </div>
                </form>
            ) : (
                <div className="listado-conteiner">
                {props.content && props.content.length > 0?
                props.content.map((item) => (
                    <div key={item.idTestimonials} className="testimonios-listado">
                        <h1>{item.username}</h1>
                        <textarea value={item.testimonial}readOnly />
                    </div>
                )):(
                <h2>No hay testimonios</h2>
            )}
                </div>
            )}
            <ToastContainer />
        </div>
        </div>
        
    
    );
    
};

export default CreateTestimonio;