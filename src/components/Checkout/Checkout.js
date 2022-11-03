import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
const getId= useLoaderData();

const {id, title}= getId;

    return (
        <div className='  mt-5 mx-auto p-3 '>
            <h4>Course Name</h4>
            <h1> <br></br> <span className='text-primary border-2 rounded-5 p-3'> {title}</span> </h1>
        </div>
    );
};

export default Checkout;