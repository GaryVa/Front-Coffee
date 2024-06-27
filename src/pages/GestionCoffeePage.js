import React from "react";
import { CoffeeList } from "../components/coffees";
import { BorrarCoffee, EditarCoffee, crearCoffee} from "../services/api";



function GestionCoffee(){
    const [id_coffee, setId_coffee] = React.useState("");
    const [nombre, setNombre] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [precio, setprecio] = React.useState("");
    const [foto, setFoto] = React.useState(null);

    const editar = (id, nombre, descripcion, precio, imagen64) => {
        setId_coffee(id);
        setNombre(nombre);
        setDesc(descripcion);
        setprecio(precio);
        setFoto(imagen64);
    }

    const Borrar = async (idCoffee) => {
        try{
            const resp = await BorrarCoffee(idCoffee);
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
                const formData = new FormData();
                formData.append("id_coffee", id_coffee);
                formData.append("name", nombre);
                formData.append("price", precio);
                formData.append("desc", desc);
                formData.append("foto", foto);
                const resp = await EditarCoffee(formData);
    
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

    return <>
    <div className="gestion-Caffee">
    <div className="Formulario">
        <h1>{id_coffee? "Editar":"Agregar"} Coffee</h1>
        <form onSubmit={Editar} encType="multipart/form-data">
        <div>
            <input type="hidden" value={id_coffee} readOnly required/>
        </div>
        <div>
          <label>nombre</label>
          <input
            type="Text"
            name='nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div>
          <label>precio</label>
          <input
            type="Number"
            name='precio'
            value={precio}
            onChange={(e) => setprecio(e.target.value)}
            placeholder='precio'
            />
        </div>
        <div>
          <label>descripcion</label>
          <textarea
            type="Text"
            name='precio'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder='descripcion'
            />
        </div>
        <div>
          <label>imagen</label>
          <input
            type="file"
            name='imagen'
            onChange={File}
            />
        </div>
        <div>
          <button type="submit" >{id_coffee? "Guardar Cambios":"agregar"}</button>
          <button type="button" onClick={limpiarFormulario}>Cancelar</button>
        </div>
      </form>
    </div>
    <div className="Tabla">
        <CoffeeList render={(cafes) =>(
        <table border={1}>
        <thead>
        <tr>
            <th>Nombre</th>
            <th>descripcion</th>
            <th>Precio</th>
            <th>Acciones</th>
        </tr>
        </thead>
            <tbody>
                {cafes.map((item) => (
                    <tr key={item.idCoffee}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={()=> editar(item.idCoffee, item.name, item.description, item.price, item.image64)}>Editar</button>
                            <button onClick={()=> Borrar(item.idCoffee)}>Borrar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        )}/>
    </div>
    </div>
    </>
}

export {GestionCoffee};