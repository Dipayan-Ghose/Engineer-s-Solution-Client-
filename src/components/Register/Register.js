import React from 'react';
import './Register.css';
const Register = () => {

const handleRegistration=(e)=>{
e.preventDefault();
const form= e.target;
const name= form.name.value;
const photo= form.url.value;
const email= form.email.value;
const password= form.password.value;
console.log(name, photo,email,password);

};


    return (
        <div >
              <div className="hero width mx-auto min-h-screen bg-blue-200 rounded my-4">
            <div className="card flex-shrink-0 width max-w-sm shadow-2xl bg-blue-200 mx-auto my-4">
            <h1 className="text-3xl text-dark mt-2">Register Here</h1>
            <form onSubmit={handleRegistration}>
            <div className="card-body">
            <div className="form-control border-0">
                <label className="label">
                  <span className="label-text" >Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered"
                  name='name'
                />
              </div>
              <div className="form-control border-0">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Photo Url"
                  className="input input-bordered"
                  name='url'
                />
              </div>
              <div className="form-control border-0">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name='email'

                  required
                />
              </div>
              <div className="form-control border-0">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name='password'

                  required
                />
               
              </div>
              <div className="form-control mt-2 border-0">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
            </form>
            
          </div>
          </div>
        </div>
    );
};

export default Register;