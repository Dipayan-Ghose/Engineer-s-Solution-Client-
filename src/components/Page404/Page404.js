import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gif from './404-technology.gif';
const Page404 = () => {
    return (
        <div>
            <Image className='mx-auto' src={gif}></Image>
            <p className='fs-5 text-green-400'>
            <Link to='/'>Go Back To Home Page</Link> 
            </p>
        </div>
    );
};

export default Page404;