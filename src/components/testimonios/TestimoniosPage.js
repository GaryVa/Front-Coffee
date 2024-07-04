import React from "react";
import './Testimonios.css';

const CreateTestimonio = (props) => {
    if (!props.mostrar) return null;
    console.log(props.content);
    return (
        <div classname="modal-overlay">
            <span className="cerrar" onClick={props.onClose}>&times;</span>
            <h1>Testimonios</h1>

            {props.content?.map((item) => (
                <div key={item.idTestimonials} className="testimonios-listado">
                    <h1>{item.username}</h1>
                    <h1>buenos dias</h1>
                    <textarea>{item.testimonial}</textarea>
                </div>
            ))}
            {/* <div className="modal-content">
                <h2>Ingrese el testimonio</h2>
                <input type="text" value={inputText} onChange={onInputChange} />
                <button onClick={onClose}>cerrar</button>
            </div> */}
        </div>
    
    );
    
};

export default CreateTestimonio;