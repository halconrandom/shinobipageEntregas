import { useState } from "react";
import './ItemCount.css'

const ItemCount = () => {
    let inicial = 1; 
    let maximo = 10; 

    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if(contador < maximo) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }
    
  return (
    <div className="itemCounter">
        <div className="buttonPlus" onClick={ incrementar } >+</div>
        <p className="textCantidad"> {contador} </p>
        <div className="buttonMinus" onClick={ decrementar } >-</div>
    </div>
  )
}

export default ItemCount
