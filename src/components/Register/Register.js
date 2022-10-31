import React from 'react';

const Register = () => {
    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-200 mx-auto my-4">
            <h1 className="text-3xl text-dark mt-2">Register Here</h1>

            <div className="card-body">
            <div className="form-control border-0">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered"
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
                  required
                />
               
              </div>
              <div className="form-control mt-2 border-0">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Register;