import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./About.css";

const About = () => {
  return (
    <div className="aboutResponsive mx-auto d-flex my-5 justify-content-center align-items-center lg:gap-[150px]">
      <div className="w-96 mt-2"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="900">
        <h1 className="text-primary">Engineer's Solution</h1>
        <p className="text-start fs-5 mt-4">
          It’s time to step up to the plate and get passionate about your work
          commit to making eLearning courses that don't bore people to tears,
          but instead inspire and motivate them to learn a new skill, change a
          certain behavior, or improve their performance.” <br></br>- Cammy Bean
        </p>
      </div>

      <div>
        <div className="card w-96 bg-base-100 shadow-xl rounded-4 mb-5"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="900">
          <div className="avatar mx-auto pt-5">
            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://avatars.githubusercontent.com/u/76113796?v=4" />
            </div>
          </div>
          <div className="card-body items-center text-center mt-2">
            <h2 className="">Dipayan Ghose</h2>
            <h3 className="card-title text-yellow-600">React Developer</h3>
            <hr className="p-1 m-1 bg-black-800 w-[200px]"></hr>
            <p className="fs-2 d-flex gap-4">
              <a
                href="https://github.com/Dipayan-Ghose"
                target="_blank"
                className="text-black"
              >
                <BsGithub></BsGithub>
              </a>{" "}
              <a
                href="https://linkedin.com/in/dipayan-ghose-bd"
                target="_blank"
                className=""
              >
                <BsLinkedin className="text-blue-600"></BsLinkedin>
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
