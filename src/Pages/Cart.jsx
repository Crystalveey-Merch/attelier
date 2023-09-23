import React from 'react'

const Cart = (cart) => {
  return (
    <div>
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Cart