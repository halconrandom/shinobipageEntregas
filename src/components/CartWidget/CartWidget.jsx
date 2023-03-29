import React from 'react'
import './CartWidget.css'
import imgCarrito from '../../media/img/shoppingcart.png';

const CartWidget = () => {
  return (
    <div className='carritoLogo'>
      <img className='imgCarrito' src ={imgCarrito} alt="Carrito" />
      <strong className='textNumber'>3</strong>
    </div>
  )
}

export default CartWidget
