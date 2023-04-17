import React from 'react'
import './CartWidget.css'


const CartWidget = () => {
  return (
    <div className='carritoLogo'>
      <img className='imgCarrito' src ="/media/img/shoppingcart.png" alt="Carrito" />
      <strong className='textNumber'>3</strong>
    </div>
  )
}

export default CartWidget
