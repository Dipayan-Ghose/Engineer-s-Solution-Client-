import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { MdLocationOn, MdEmail } from "react-icons/md";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const resetForm = e.target;

    emailjs
      .sendForm(
        "service_ke4jf7u",
        "template_asmbrpn",
        form.current,
        "4p6lZrqhQPCPeL3kG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetForm.reset();
    toast("Message Sent Successfully", {
      position: "top-center",
      autoClose: 1000,
    });
  };


  return (
    <div className=" d-flex responsiveContact sm:mt-[100px] my-[100px] mx-auto align-items-center lg:w-[850px] ">
      <div className="infoResponsive w-96 mb-5"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="900">
        <h2 className="font-bold text-start fs-1">Get In Touch</h2>
        <p className="font-semibold text-start fs-5">
          Feel free to send a message <br></br> using the form
        </p>
        <p className="d-flex w-56 align-items-center gap-2 text-primary ">
          <MdLocationOn size="20px"></MdLocationOn> East West University, Dhaka
        </p>
        <p className="d-flex w-56 align-items-center gap-2 text-primary">
          <MdEmail size="20px"></MdEmail> ghosedipayen@gmail.com        </p>
      </div>
      
      <div className="block p-5 lg:w-[380px] p-6 rounded-lg mx-auto shadow-lg bg-white "
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="900">
        <h3 className="text-primary mb-4 mx-auto">Contact</h3>
        <form ref={form} onSubmit={sendEmail} >
          <div className="form-group mb-6">
            <input
              type="text"
              name="user_name"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
            ></input>
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              name="user_email"
              required
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
            ></input>
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
