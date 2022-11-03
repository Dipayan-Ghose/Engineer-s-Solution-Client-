import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Private = ({children}) => {
const {user, loading}= useContext(authContext);
const location= useLocation();
// if (loading){
//     return 'ghurrrrrrrrrrrrrrrrrrr';
// }

   if(!user){
    toast("You Need to Login In first",{ position: "top-center",autoClose: 1500},{
        toastId: "success"        
    });
    console.log(toast);
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>;

   }
   <ToastContainer limit={1} />

   return children;
};

export default Private;