import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import "./Payment.css"


const Payment = () => {
    const navigate = useNavigate();
     const { cartItems, clearCart } = useContext(CartContext);
     const { orderDetails } = useContext(OrderContext)


 const handlePayment = (()=>{

     const order = {
      id: Date.now(),
      items: cartItems,
      address: orderDetails,
      total: cartItems.reduce((sum, item) => sum + item.price, 0),
      date: new Date().toLocaleString()
     };

    
     const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(order);

     localStorage.setItem("orders", JSON.stringify(existingOrders));
      clearCart();
      navigate("/success")

 

 })



  return (
    <div className='payment-box'>
       <h2 >Payment</h2>
       <p>Total to Pay: ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
       <button  onClick={handlePayment} >Pay Now</button>
    </div>
  )
}

export default Payment
