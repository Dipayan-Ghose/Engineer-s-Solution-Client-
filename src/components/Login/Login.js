import React, { useContext, useState } from "react";
import { authContext } from "../Context/AuthProvider/AuthProvider";
import { FcGoogle, FcDown } from "react-icons/fc";
import { FaArrowCircleDown, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const navigate= useNavigate();
  const [error, setError]= useState('');
  const location = useLocation();
  const from= location.state?.form?.pathname || '/';
  const { providerLogin, signInUser } = useContext(authContext);

  const providerGoogle = new GoogleAuthProvider();
  const providerGithub= new GithubAuthProvider();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const form= event.target;
    const email= form.name.value;
    const password= form.password.value;
    signInUser(email,password)
    .then(res=>{
      const user = res.user;
      console.log(user);
      form.reset();
      setError('');
      navigate(from, {replace: true});
    })
    .catch(error=>{
     console.error(error)
    setError(error.message);
    });

  };

  const googleSignIn = () => {
    providerLogin(providerGoogle)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate('/')
      })
      .catch((error) => console.error(error));
  };

  const githubSignIn = () => {
    providerLogin(providerGithub)
    .then(res=>{
      const user= res.user;
      console.log(user);
      navigate('/')
    })
    .catch(error=> console.error(error));
  };

  return (
    <div>
      <div className="hero width mx-auto min-h-screen bg-blue-200 rounded my-4">
        <div className="hero-content flex-col lg:flex-row-reverse  mx-auto">
         <form onSubmit={handleSubmit}>
         <div className="card flex-shrink-0  mx-auto  max-w-sm shadow-2xl bg-blue-200">
            <h1 className="text-3xl text-dark mt-2">Login Now!</h1>

            <div className="card-body">
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
                <label className="label">
                  <p className=" text-danger mt-1 mb-0 text-start ">
                    Don't have an account? <br></br>
                    <span>
                      <Link to="/register">Please Register</Link>{" "}
                    </span>
                  </p>
                </label>
              </div>
              <div className="form-control mt-1 border-0">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-danger my-1">
                {error}
              </p>
            </div>
          </div>
         </form>
          <div className="text-center lg:text-left">
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <span className="text-info fs-5 d-flex signin ">
                <span className="mx-1">Using</span>{" "}
                <FaArrowCircleDown className="my-auto"></FaArrowCircleDown>{" "}
              </span>

              <button onClick={googleSignIn} className="btn btn-ghost d-flex">
                {" "}
                <FcGoogle></FcGoogle> <span className="mx-2"> Google</span>{" "}
              </button>
              
              <button onClick={githubSignIn} className=" btn btn-ghost d-flex">
                <FaGithub></FaGithub> <span className="mx-2"> Github</span>{" "}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
