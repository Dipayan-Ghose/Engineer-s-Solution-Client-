import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const getId = useLoaderData();

  const { image_url, title } = getId;

  const handleBuy = () => {
    toast.warning('Not Able to Buy', {autoClose: 1000})
  };

  return (
    <div>
      <input type="checkbox" id="buyNow" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="buyNow"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
      <div className="card mx-auto my-5 w-[500px] bg-base-100 shadow-xl">
        <div className="card-body">
          <img className="imgWidth mx-auto rounded-3" src={image_url}></img>
          <h3 className="text-primary">Want To Buy {title} Course?</h3>

          <div className="card-actions justify-center">
            <button htmlFor="buyNow" className="btn btn-warning" onClick={handleBuy}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
