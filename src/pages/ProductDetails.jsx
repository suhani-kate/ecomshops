import axios from 'axios';
import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import './ProductDetails.css'


const ProductDetails = () => {
  const {addToCart } = useContext(CartContext)
  const [product, setProduct] = useState(null);
const { id } = useParams();   


useEffect(()=>{
  fetchProduct();
},[id])


const fetchProduct = ( async ()=>{
      try {

        
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

       setProduct(res.data);

      } catch (error) {
          console.log(error);
          
      }
})



 const handleAddToCart = () => {
    addToCart(product);
    alert("Product added to cart ✅");
  };
if (!product) return <p className="loading-text">Loading...</p>;


  return (
    <div>

<div className="product-details-container" style={{ padding: "1rem", display: "flex", gap: "2rem" }}>
      <img className="product-image" src={product.image} alt={product.title} style={{ width: "200px" }} />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p><strong>${product.price}</strong></p>
        <p>{product.description}</p>
        <button  className="add-to-cart-btn" onClick={handleAddToCart} >Add to Cart</button>
      </div>
    </div>


      
    </div>
  )
}

export default ProductDetails
