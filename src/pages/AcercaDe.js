import avater from "../img/avatar.png"
import "./AcercaDe.css"

function AcercaDe(){

    return <>
    <div className="contenedor-desarrollador">
        <div className="Desarrollador">
            <img src={avater} alt="imagen portada"></img>
            <h1>Gary Valladares</h1>
            <h4>Ingenieria civil en informatica</h4>
            <h4>Talca</h4>
            <a className="git" href="https://github.com/GaryVa">Github</a>
        </div>
    </div>
    </>
}

export {AcercaDe}