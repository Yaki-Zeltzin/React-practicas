import Banner from "../sections/Banner";
import Cupcakes from "./cupCakes";

const Home = () => (
    <>
    <Banner/>
    <Cupcakes peticion="cupcakes?sabor_like=fresa"/>
    </>
)//Home

export default Home;