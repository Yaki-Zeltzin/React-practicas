import React from "react";

const Cupcake = (props) => {
    return(
        <>
        <div className="cupcake-item">
            <img className="cupcake-img" src={props.foto} alt={`Cupcake ${props.color}`}/>
            <h2 className="cupcake-title">{props.nombre}</h2>
            <p className="cupcake-description">{`Sabor: ${props.sabor}`}</p>
            <p className="cupcake-price">{props.precio}</p>
            <button className="cupcake-btn">Comprar</button>
        </div>
        </>
    )
}//Cupcake

export default Cupcake;