import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { OrderContext} from "../context/OrderContext"
import './Checkout.css'

const Checkout = () => {
    const { setOrderDetails} = useContext(OrderContext)
 const navigate = useNavigate();
     const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: ""
  });

    const [errors, setErrors] = useState({});

  const handleChange = ((e)=>{
    setForm({ ...form, [e.target.name]: e.target.value });
  })

  const  validate = (()=>{
    let tempErrors = {};
    if (!form.name) tempErrors.name = "Name is required";   
     if (!form.email) tempErrors.email = "Email is required";
    if (!form.address) tempErrors.address = "Address is required";
    if (!form.city) tempErrors.city = "City is required";
    if (!form.postalCode) tempErrors.postalCode = "Postal Code is required";
     setErrors(tempErrors);
     return Object.keys(tempErrors).length === 0;
  })

  const handleSubmit = ((e)=>{
    e.preventDefault();
     if (!validate()) return;

    setOrderDetails(form);
    navigate("/payment");
  })

  return (
    <div className='checkout-container'>
       <h2 className='checkout-title'> Checkout page </h2>
    <form className='checkout-form' onSubmit={handleSubmit } style={{ maxWidth: "400px" }}>
        <div className='form-group'>
          <label>Name</label>
          <input className='form-input' name="name" value={form.name} onChange={handleChange}  />
          { errors.name &&  <p style={{ color: "red" }} className='error-message'>  { errors.name } </p>}
        </div>

        <div className='form-group'>
          <label>Email</label>
          <input className='form-input'  name="email" value={form.email} onChange={handleChange} />
         { errors.email &&  <p style={{ color: "red" }} className='error-message'>   { errors.email } </p>}

        </div>

        <div className='form-group'>
          <label>Address</label>
          <input className='form-input'  name="address" value={form.address} onChange={handleChange}  />
        { errors.address &&  <p style={{ color: "red" }} className='error-message'>   { errors.address } </p>}

        </div>

        <div className='form-group'>
          <label>City</label>
          <input className='form-input'  name="city" value={form.city}  onChange={handleChange} />
         { errors.city &&  <p style={{ color: "red" }} className='error-message'>   { errors.city } </p>}
    
        </div>

        <div className='form-group'>
          <label>Postal Code</label>
          <input className='form-input'  name="postalCode" value={form.postalCode} onChange={handleChange} />
         { errors.postalCode &&  <p style={{ color: "red" }} className='error-message'>   { errors.postalCode } </p>}
          
        </div>

        <button className='submit-btn' type="submit" style={{ marginTop: "1rem" }}>Proceed to Payment</button>
      </form>
   
    </div>
  )
}

export default Checkout
