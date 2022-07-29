import React from 'react'
import logo from '../../img/cart.jpg';

function CartWidget() {
  return (
    <div>
      <img src={logo} width="30px" alt="carrito de compra" />
      <span  >0</span>
    </div>
  )
}

export default CartWidget