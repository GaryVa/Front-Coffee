import "./index.css"

function Tabla(props){
    const { column, datos, action } = props;

    return <>
        <div className="pagina-tabla">
            <div className="contenedor-tabla">
                <table className="tabla">
                    <thead>
                        <tr>
                            {column.map((col) => (
                                <th key={col.key}>{col.Header}</th>
                            ))}
                            {action && <th>Acciones</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((row, index) => (
                            <tr key={index}>
                                {column.map((col) => (
                                    <td key={col.key}>
                                        {col.key === 'disabled' || col.key === 'locked'
                                        ? row[col.key] ? 'true': 'false' : row[col.key]}
                                    </td>
                                ))}
                                {action && (
                                    <td>
                                        <div className="tabla-botones">
                                        {action.map((action, index) => (
                                            <button key={index} onClick={()=>action.onClick(row)} className="buton-tabla">
                                                {action.label}
                                            </button>
                                        ))}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </>
}

export {Tabla};