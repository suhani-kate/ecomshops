import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
     name: "",
    email: "", 
    password: "" 
    });
const navigate = useNavigate();


     const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


   const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }


    
  localStorage.setItem("myshop", JSON.stringify(form));
  alert("Registered successfully!");
  navigate("/login");

  };


  return (
    <div>
      

   <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />

        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />


        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />


        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
