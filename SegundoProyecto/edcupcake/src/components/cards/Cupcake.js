const Cupcake =  ({
    image, 
    sabor, 
    description, 
    color, 
    precio
}) => {
    return(
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img src={image} alt={sabor}/>
            <p>{description}</p>
            <span>Color: {color}</span>
            <span>Precio: {precio}</span>
        </div>
    )
}

export default Cupcake;