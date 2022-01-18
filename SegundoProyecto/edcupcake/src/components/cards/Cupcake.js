import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import {put} from "axios";



const Cupcake = ({
    image,
    sabor,
    descripcion,
    color,
    precio,
    vendido
}) => {

    const [vend, setVend] = useState();
    // const [vend] = useFetch("cupcakes");


    useEffect(()=>{
        put(`${process.env.REACT_APP_URL_API}cupcakes`)
            .then(data => setVend(data.data))
    },[]);

    const vender = () =>{
        console.log(vend)

    }


    return (
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img className="cupcake-img img-container" src={image} alt={sabor} />
            <p>{descripcion}</p>
            <span>Color: {color} </span>
            <span> | Precio: ${precio}</span>
            {
                !vendido && <button className="cupcake-btn" onClick={vender}>Comprar</button>
            }
        </div>
    )
}

Cupcake.propTypes = {
    precio: PropTypes.number,
    color: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
    sabor: PropTypes.string.isRequired,
    image: PropTypes.string
}

Cupcake.defaultProps = {
    image: "https://th.bing.com/th/id/OIP.Zwbyo8wI16zhdM4pI39LqwHaGE?w=259&h=212&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    precio: 0
}

export default Cupcake;