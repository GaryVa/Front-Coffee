import React from "react";
import { BorrarCoffee, Coffees, EditarCoffee, crearCoffee} from "../services/api";
import "./GestionCoffee.css";
import { Tabla } from "../components/tabla";



function GestionCoffee(){
    const [id_coffee, setId_coffee] = React.useState("");
    const [nombre, setNombre] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [precio, setprecio] = React.useState("");
    const [foto, setFoto] = React.useState(null);

    const [cafes, setCafes] = React.useState([]);
    const [cont, setCont] = React.useState("");
    

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
    }, [cont]);


    const editar = (id, nombre, descripcion, precio, imagen64) => {
        setId_coffee(id);
        setNombre(nombre);
        setDesc(descripcion);
        setprecio(precio);
        setFoto(imagen64);
        console.log("id", id);
    }

    const Borrar = async (idCoffee) => {
        try{
            const resp = await BorrarCoffee(idCoffee);
            if (resp) {
                setCont(cont+1);
            }
            console.log("id: ",idCoffee);
            console.log("coffee Eliminado", resp);
        }catch (error) {
            console.log("error al eliminar", error);
        }
    }

    const File = (e) => {
        const file = e.target.files[0];
        setFoto(file);
    };

    const Editar = async(e)=>{
        e.preventDefault();
        if (id_coffee){
            try{
                const envio = {
                    id_coffee:id_coffee,
                    description:desc,
                    name:nombre,
                    price:precio,
                    image64:foto
                }
                const resp = await EditarCoffee(envio);
                if (resp) {
                    setCont(cont+1);
                }
    
                console.log("Editado", resp);
                limpiarFormulario();
            }catch (error){
                console.log("no creado", error);
            }
        } else {
            try{
                const formData = new FormData();
                formData.append("name", nombre);
                formData.append("price", precio);
                formData.append("desc", desc);
                formData.append("foto", foto);
                const resp = await crearCoffee(formData);
                if (resp) {
                    setCont(cont+1);
                }
    
                console.log("creado", resp);
            }catch (error){
                console.log("no creado", error);
            }

        }



    }

    const limpiarFormulario = () => {
        setId_coffee("");
        setNombre("");
        setDesc("");
        setprecio("");
        setFoto(null);
    }
    const coffeColumnas = [
        { key: "idCoffee", Header:"id"},
        { key: "name", Header:"Nombre"},
        { key: "description", Header:"Descripcion"},
        { key: "price", Header: "Precio"}
    ]

    return <>
    <div className="gestion-Caffee">
        <div className="Formulario">
            <h1>{id_coffee? "Editar":"Agregar"} Coffee</h1>
            <form onSubmit={Editar} encType="multipart/form-data">
            <div className="id">
                <input type="hidden" value={id_coffee} readOnly required/>
            </div>
            <div className="form-entrada">
            <label>Nombre</label>
            <input
                type="Text"
                name='nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                required
                />
            </div>
            <div className="form-entrada">
            <label>Precio</label>
            <input
                type="Number"
                name='precio'
                value={precio}
                onChange={(e) => setprecio(e.target.value)}
                placeholder='Precio'
                required
                />
            </div>
            <div className="form-entrada">
            <label>Descripcion</label>
            <textarea
                type="Text"
                name='precio'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder='Descripcion'
                required
                />
            </div>
            <div className="form-entrada">
            <label>{id_coffee?"":"Imagen"}</label>
            <input
                type={id_coffee?"hidden":"file"}
                name='imagen'
                className="button-foto"
                onChange={File}
                required
                />
            </div>
            <div className="form-botones">
            <button type="submit" >{id_coffee? "Guardar Cambios":"agregar"}</button>
            <button type="button" onClick={limpiarFormulario}>Cancelar</button>
            </div>
        </form>
        </div>
        <div className="Tabla">
           
            <Tabla 
                column={coffeColumnas}
                datos={cafes}
                action={[
                    { label: 'Editar', onClick: (item) => editar(item.idCoffee, item.name, item.description, item.price) },
                    { label: 'Borrar', onClick: (item) => Borrar(item.idCoffee)}
                ]}
            />
        
        </div>
    </div>
    </>
}

export {GestionCoffee};