const Cupcake =  ({
    image, 
    sabor, 
    description, 
    color, 
    precio
}) => {
    return(
        <div>
            <img src={image} alt={sabor}/>
            <p>{description}</p>
            <span>Color: {color}</span>
            <span>Precio: {precio}</span>
        </div>
    )
}

export default Cupcake;