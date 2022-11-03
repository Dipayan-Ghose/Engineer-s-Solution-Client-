import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-75 m-auto my-5'>
            <h4>
            What is `cors`?
            </h4>
            <p>
            In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there. 
            </p>
            <h4>
            Why are you using `firebase`? What other options do you have to implement authentication?
            </h4>
            <p>
                I am using firebase because, it's free to build an authentication provided by Google. Implementing Firebase Authentication is also relatively fast and easy. Firebase Authentication makes it easier to get users signed-in without having to understand the complexities behind implementing my own authentication system. 
                <br></br>
                I can also use Two-factor authentication (2FA),Token-based authentication, Biometric authentication and Password-based authentication etc. 
            </p>
            <h4>
            How does the private route work?
    
            </h4>
            <p>
Private routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. It works based on child component. Private route component renders child components if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
            </p>
            <h4>
            What is Node? How does Node work?
            </h4>
            <p>
            Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. 
            <br></br>
            Node.js basically works on two concept; Asynchronous and Non-blocking I/O.
            It accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. 


            </p>
        </div>
        </div>
    );
};

export default Blog;