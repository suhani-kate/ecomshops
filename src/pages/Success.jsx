import React from 'react'
import { Link } from 'react-router-dom'
import "./Payment.css"
const Success = () => {
  return (
    <div className='payment-box'>
       <h2>🎉 Payment Successful!</h2>
      <p>Your order has been placed.</p>

       <Link to="/orders">
        <button className='successbtn'>View My Orders</button>
      </Link>
    </div>
  )
}

export default Success
