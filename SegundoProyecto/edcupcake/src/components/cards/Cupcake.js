import PropTypes from "prop-types";

const Cupcake =  ({
    image, 
    sabor, 
    descripcion, 
    color, 
    precio
}) => {
    return(
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img src={image} alt={sabor}/>
            <p>{descripcion}</p>
            <span>Color: {color} </span>
            <span> | Precio: ${precio}</span>
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