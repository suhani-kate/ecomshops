import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({product}) => {
  return (
    <div>


        <div className='product-card'>
            <img src={product.image} alt="" />
            <h3> {product.title} </h3>
            <h3> {product.price} </h3>
            <Link to={`/products/${product.id}`} >
              <button>  view details </button>
            </Link>
        </div>
      
    </div>
  )
}

export default ProductCard
