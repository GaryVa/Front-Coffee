import React from "react";
import './Testimonios.css';

const CreateTestimonio = ({onClose, inputText, onInputChange}) => {
    return (
        <div classname="modal-overlay">
            <div className="modal-content">
                <h2>Ingrese el testimonio</h2>
                <input type="text" value={inputText} onChange={onInputChange} />
                <button onClick={onClose}>cerrar</button>
            </div>
        </div>
    
    );
    
};

export default CreateTestimonio;