import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import { AuthProvider } from './context/AuthContext';
import {CartProvider } from './context/CartContext'
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import { OrderProvider } from './context/OrderContext';
import Success from './pages/Success';
import Orders from './pages/Orders';
import PrivateRoutea from './components/PrivateRoutea';
import NotFound from './pages/NotFound';

const App = () => {
  return (
 
    <AuthProvider>  
      <CartProvider> 
        <OrderProvider> 
      <Router>
        <Navbar/>
        <Routes>
             <Route path='/' element={ <Home/> } />
             <Route  path='/cart' element={ <Cart/> } />
             <Route path='/login' element={ <Login/> } />
             <Route path='/register' element={ <Register/> } />
             <Route path='/products/:id' element={ <ProductDetails/> } />
             <Route path="/checkout" element={  <PrivateRoutea>  <Checkout /> </PrivateRoutea>   } />
             <Route path="/payment" element={ <PrivateRoutea>  <Payment />  </PrivateRoutea>  } />
             <Route path="/success" element={ <PrivateRoutea><Success />  </PrivateRoutea>} />
             <Route path="/orders" element={<PrivateRoutea><Orders />  </PrivateRoutea>} />
                <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>
      </OrderProvider>  
      </CartProvider>
      </AuthProvider>



   
  )
}

export default App
