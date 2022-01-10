import React from "react";
//**COMPONENTE PRESENTACIONAL**

/* const Cupcake = (props) => {
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
}//Cupcake */


//**COMPONENTE DE CLASE**/
class Cupcake extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            vendido: false
        }//super

        this.vender = this.vender.bind(this)
    }//constructor

    vender(){
        this.setState({
            vendido: true
        })
    }//vender


    render(){
        return(
            <div className="cupcake-item">
            <img className="cupcake-img" src={this.props.foto} alt={`Cupcake ${this.props.color}`}/>
            <h2 className="cupcake-title">{this.props.nombre}</h2>
            <p className="cupcake-description">{`Sabor: ${this.props.sabor}`}</p>
            <p className="cupcake-price">{this.props.precio}</p>
            <p className="cupcake-description"><b>Estado: </b>{this.state.vendido ? "Vendido" : "A la venta"}</p>
            {   
                !this.state.vendido && <button className="cupcake-btn" onClick={this.vender}>Comprar</button>
            }
        </div>
        );
    }
}


export default Cupcake;