
import React from "react";
import { crearCoffee } from "../services/api";

function Page2(){
    const [nombre, setnombre] = React.useState("");
    const [precio, setprecio] = React.useState("");
    const [desc, setdesc] = React.useState("");
    const [foto, setfoto] = React.useState(null);
    
    const crearCoffees = async(e)=>{
        e.preventDefault();
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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setfoto(file);
    };

    return <>
    <div >
        <h1 >agregar coffee</h1>
        <form onSubmit={crearCoffees} encType="multipart/form-data">
        <div>
          <label>nombre</label>
          <input
            type="Text"
            name='nombre'
            onChange={(e) => setnombre(e.target.value)}
            />
        </div>
        <div>
          <label>precio</label>
          <input
            type="Number"
            name='precio'
            onChange={(e) => setprecio(e.target.value)}
            placeholder='precio'
            />
        </div>
        <div>
          <label>descripcion</label>
          <input
            type="Text"
            name='precio'
            onChange={(e) => setdesc(e.target.value)}
            placeholder='descripcion'
            />
        </div>
        <div>
          <label>imagen</label>
          <input
            type="file"
            name='imagen'
            onChange={handleFileChange}
            />
        </div>
        <div>
          <button type="submit" >agregar</button>
        </div>
      </form>
    </div>
  </>
}


export {Page2};