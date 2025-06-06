import { createContext, useEffect, useState } from "react"




export const CartContext = createContext()

export const CartProvider = (({children})=>{
const [cartItems, setCartItems] = useState([]);
console.log("carttesing", cartItems.length);


// get item from local storage :
useEffect(() => {
    const storedCart = localStorage.getItem("ecom-cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);


// localstorage add items 
  useEffect(() => {
    localStorage.setItem("ecom-cart", JSON.stringify(cartItems));
  }, [cartItems]);


// add to cart >> productDetails page 
 const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };


//   remove products from carts  Carts.js page 
const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


  // clear carts Carts.js >>>
   const clearCart = () => {
    setCartItems([]);
  };


    return(

  <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>

    )
})