import React, { useContext } from 'react'
import './Cart.css'

import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cartItems ,removeFromCart, clearCart} = useContext(CartContext);
  console.log("cartpag tetsting", cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  
  return (
    <div>
          <div className="cart-container" style={{ padding: "1rem" }}>
      <h2>Your Cart</h2>

      <ul  className="cart-items" style={{ listStyle: "none", padding: 0 }}>
        {cartItems.map((item, idx) => (
          <li
            key={idx}
            
     >
            <div className="empty-cart"  style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img src={item.image} alt="" style={{ width: "50px" }} />
              <div>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </div>
            </div>
            <button className='remove-btn' onClick={() => removeFromCart(item.id)} >Remove <i class="fa-solid fa-trash"></i> </button>
          </li>
        ))}
      </ul>

      <h3>Total: {total} </h3>

      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <button className="empty-carts" onClick={clearCart}>Clear Cart<i class="fa-solid fa-cart-shopping"></i> </button>

          <Link to="/checkout">
          
          <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
      
      </div>
    </div>
      
    </div>
  )
}

export default Cart
