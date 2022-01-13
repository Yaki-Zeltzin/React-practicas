import { get } from "axios";
import { useEffect, useState } from "react";
import Cupcake from "../cards/Cupcake";

const Cupcakes = ({peticion, title}) => {

    const[cupcakes, setCupcakes] = useState();

    //**PETICION CON FETCH**
    // useEffect(()=>{
    //     fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
    //     .then(response => response.json())
    //     .then(data => setCupcakes(data))
    //     .catch(e =>  console.log(e))
    // },[peticion])

    //**PETICION CON AXIOS**/
    useEffect(()=>{
        get(`${process.env.REACT_APP_URL_API}${peticion}`)
            .then(data => setCupcakes(data.data))
        },[peticion])

    return(
        <div className="ed-grid">
            { title && <h1>Página de cupcakes</h1>}
            {
               cupcakes ? (
                   <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                       {cupcakes.map(({
                           id,
                           image,
                           description,
                           color,
                           sabor,
                           precio
                       }) => (
                       <Cupcake 
                       key={id}
                       image={image}
                       description={description}
                       color={color}
                       sabor={sabor}
                       precio={precio}/>
                       ))}
                   </section>
               ): <span>Cargando...</span>
            }
        </div>
    )
}//Cupcakes
   


export default Cupcakes;