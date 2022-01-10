import React from "react";
const CupcakeFunction = ({foto,sabor, color, nombre, precio}) =>{
    const vender =() => console.log("venido!!")

    return(
        
            <div className="cupcake-item">
            <img className="cupcake-img" src={foto} alt={`Cupcake ${color}`}/>
            <h2 className="cupcake-title">{nombre}</h2>
            <p className="cupcake-description">{`Sabor: ${sabor}`}</p>
            <p className="cupcake-price">{precio}</p>
            <p className="cupcake-description"><b>Estado: </b>{vendido ? "Vendido" : "A la venta"}</p>
            {   
                !vendido && <button className="cupcake-btn" onClick={vender}>Comprar</button>
            }
        </div>
        
    )
}

export default CupcakeFunction;