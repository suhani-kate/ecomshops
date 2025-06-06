import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navigate } from "react-router-dom";

const PrivateRoutea = ({children }) => {
    const { isAuthenticated } = useContext(AuthContext);
 
   return isAuthenticated ? children : <Navigate to="/login" />;

}

export default PrivateRoutea
