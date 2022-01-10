import { useRef, useState } from "react";
import "./App.css"

const CupcakeFunction = ({foto,sabor, color, nombre, precio}) =>{
    
    const [vendido, setVendido] = useState( false )
    const [reservado, setReservado] = useState(false)
    
    const fotoCupcake = useRef()

    const vender =() => {
        setVendido(true)
        setReservado(true)
        const elemento = fotoCupcake.current
        elemento.classList.add("vendido")
    }

    const reservar = () => {
        setReservado(true)
    }

    return(
        
            <div className="cupcake-item">
            <img className="cupcake-img" ref={fotoCupcake} src={foto} alt={`Cupcake ${color}`}/>
            <h2 className="cupcake-title">{nombre}</h2>
            <p className="cupcake-description">{`Sabor: ${sabor}`}</p>
            <p className="cupcake-price">{precio}</p>
            <p className="cupcake-description"><b>Estado: </b>{reservado ? "Reservado" : "Libre"}</p>
            {   
                !reservado && <button className="cupcake-btn" onClick={reservar}>Reservar</button>
            }
            <p className="cupcake-description"><b>Estado: </b>{vendido ? "Vendido" : "A la venta"}</p>
            {   
                !vendido && <button className="cupcake-btn" onClick={vender}>Comprar</button>
            }
        </div>
        
    )
}

export default CupcakeFunction;