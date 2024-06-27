export async function getUsers(){
    const res = await fetch("https://randomuser.me/api/?results=10");
    const data = await res.json();
    return data;
}


export async function loginAccount(login){
    try{
        const res = await fetch("http://localhost:8080/api/auth/login",{
            method:"POST",
            body:JSON.stringify(login),
            headers:{
                "content-Type":"application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function Coffees(){
    try{
        const res = await fetch("http://localhost:8080/api/coffee/coffees",{
            method:"GET",
        });
        const data = await res.json();
        console.log(data);
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function crearCoffee(coffee){
    try{
        const token = localStorage.getItem('token');
        const res = await fetch("http://localhost:8080/api/coffee/coffees",{
            method:"POST",
            body:coffee,
            headers:{
                'authorization':'Bearer ' + token,
            },
        });
        const data = await res.json();
        console.log("coffee creado", data);
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function crearTestimonios(testimonio){
    try{
        const token = localStorage.getItem('token');
        const res = await fetch("http://localhost:8080/api/testimonials/ingresar",{
            method:"POST",
            body:testimonio,
            headers:{
                'authorization':'Bearer ' + token,
            },
        });
        const data = await res.json();
        console.log("testimonio creado", data);
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function EditarCoffee(coffee){
    try{
        const token = localStorage.getItem('token');
        const res = await fetch("http://localhost:8080/api/coffee/coffee/update",{
            method:"PUT",
            body:coffee,
            headers:{
                'authorization':'Bearer ' + token,
            },
        });
        const data = await res.json();
        console.log("Coffee editado", data);
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function BorrarCoffee(coffeeId){
    try{
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:8080/api/coffee/coffee/delete?id_coffee=${coffeeId}`,{
            method:"DELETE",
            headers:{
                'authorization':'Bearer ' + token,
            },
        });
        console.log("Coffee Eliminado", res);
        return res;
    }catch(error){
        console.log(error);
        return null;
    }
}