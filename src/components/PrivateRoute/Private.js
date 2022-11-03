import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


const Private = ({children}) => {
const {user, loading}= useContext(authContext);
const location= useLocation();
if (loading){
    return <Button variant="primary" className='mt-5' disabled>
        <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>;
}

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