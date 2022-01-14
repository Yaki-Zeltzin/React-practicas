import Banner from "../sections/Banner";
import Servicios from "../sections/Servicios";
import Cupcakes from "./cupCakes";

const Home = () => (
    <>
    <Banner/>
    <Cupcakes peticion="cupcakes?sabor_like=fresa"/>
    <Servicios peticion="servicios" />
    </>
)//Home

export default Home;