import React, { useContext, useState } from "react";
import { authContext } from "../Context/AuthProvider/AuthProvider";
import { FcGoogle, FcDown } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import loginImg from "./Login image.jpg";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { providerLogin, signInUser } = useContext(authContext);

  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success(`Welcome ${user?.displayName}`, {
          position: "bottom-center",
          autoClose: 1500,
        });
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.code);
        setError(error.code);
      });
  };

  const googleSignIn = () => {
    providerLogin(providerGoogle)
      .then((res) => {
        const user = res.user;
        toast.success(`Welcome ${user?.displayName}`, {
          position: "bottom-center",
          autoClose: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const githubSignIn = () => {
    providerLogin(providerGithub)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success(`Welcome ${user?.displayName}`, {
          position: "bottom-center",
          autoClose: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="lg:w-[800px] mx-auto bgLock">
      <div className="hero mx-auto bg-base-100 lg:d-flex rounded my-4">
        <div className="flex-col mx-auto">
          <div className="card flex-shrink-0 w-[320px] lg:w-[400px] mx-auto shadow-2xl bg-blue-200">
            <h1 className="text-3xl text-dark mt-2">Login Now!</h1>
            <form onSubmit={handleSubmit}>
              <div className="card-body p-4">
                <div className="form-control border-0">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered w-100"
                    name="email"
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
                    className="input input-bordered w-100"
                    name="password"
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
                <p className="text-danger p-0 m-0">
                  {error? `Ops! ${error}` : ''} <br></br>
                </p>
              </div>
            </form>
            <hr className="p-0 m-0 w-72 mx-auto border-2"></hr>
            <div className="text-center lg:text-left">
              <ul
                tabIndex={0}
                className="mx-auto w-[130px] lg:w-[150px] menu px-2 shadow-xl bg-base-100 rounded-box w-52"
              >
                <button
                  onClick={googleSignIn}
                  className="w-32 btn btn-ghost d-flex  "
                >
                  {" "}
                  <FcGoogle></FcGoogle> <span className="mx-2"> Google</span>{" "}
                </button>

                <button
                  onClick={githubSignIn}
                  className="w-32 btn btn-ghost d-flex"
                >
                  <FaGithub></FaGithub> <span className="mx-2 "> Github</span>{" "}
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="invisible visibility">
          <img className=" w-[400px]" src={loginImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
