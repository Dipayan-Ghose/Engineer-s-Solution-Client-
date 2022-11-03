import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider/AuthProvider';

const Private = ({children}) => {
const {user}= useContext(authContext);
const location= useLocation();


   if(!user){
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
   }
   return children;
};

export default Private;