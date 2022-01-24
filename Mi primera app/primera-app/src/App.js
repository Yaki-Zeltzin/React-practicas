//import Cupcake from "./Cupcake";
import CupcakeFunction from "./CupcakeFunction";
import "./App.css"

const App = () => (
  <>
    <header>
            {/* <img className="header-img" src="https://i.pinimg.com/originals/7c/e1/43/7ce143ff089a259eba7bf30745b760fc.jpg" alt="logo"/> */}
    <h2 className="header-title">Catálogo</h2>
    </header>
    <div className="container">
      <CupcakeFunction foto="https://sweetcsdesigns.com/wp-content/uploads/2015/02/Pink-Velvet-Raspberry-Cupcakes-3-683x1024.jpg" nombre="rosa" sabor="vainilla" precio="$20"/>
      <CupcakeFunction foto="https://festas.site/wp-content/uploads/2020/02/18-cupcake-azul-tiffany-com-confeitos-prateados-1.jpg" nombre="azul" sabor="chocolate" precio="$15"/>
      <CupcakeFunction foto="https://www.simplystacie.net/wp-content/uploads/2012/02/purple2.jpg" nombre="morado" sabor="sarzamora" precio="$25"/>
      <CupcakeFunction foto="https://th.bing.com/th/id/OIP.JI_Pc3elT-zl9cvx6xTLMwEyDM?pid=ImgDet&rs=1" nombre="verde" sabor="limón" precio="$15"/>
      <CupcakeFunction foto="https://th.bing.com/th/id/OIP.0RbsXmqeaVCpiq_vHsKHXgHaE8?pid=ImgDet&rs=1" nombre="amarillo" sabor="melon" precio="$20"/>
      <CupcakeFunction foto="https://th.bing.com/th/id/OIP.fXg2P6tcZ8icNk2GAuyvOgHaI9?pid=ImgDet&rs=1" nombre="rojo" sabor="fresa" precio="$25"/>
    </div>
    </>
  );

export default App;
