import { useEffect, useState } from "react";
import Cupcake from "../cards/Cupcake";

const Cupcakes = () => {

    const[cupcakes, setCupcakes] = useState();

    useEffect(()=>{
        fetch("http://localhost:3050/cupcakes")
        .then(response => response.json())
        .then(data => setCupcakes(data))
    },[])

    return(
        <div className="ed-grid">
            <h1>Página de cupcakes</h1>
            {
               cupcakes ? (
                   <section>
                       {cupcakes.map(c => <Cupcake/>)}
                   </section>
               ): <span>Cargando...</span>
            }
        </div>
    )
}//Cupcakes
   


export default Cupcakes;