import React from "react";
import { Col, Row } from "react-bootstrap";
import CourseCard from "../CourseCard/CourseCard";
import CourseList from "../LeftSide/CourseList";
import { Carousel } from "3d-react-carousal";
import "./home.css";
import { useLoaderData } from "react-router-dom";
import CardForHome from "./CardForHome";
import Marquee from "react-fast-marquee";
import Contact from "../Contact/Contact";
import { TypeAnimation } from "react-type-animation";
import videoBg from "./videoBg.mp4";

let slides = [
  <img
    className="imgWidht"
    src="https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg"
    alt="1"
  />,
  <img
    className="imgWidht"
    src="https://www.investopedia.com/thmb/s56ubR5UguDpmw4xitrCznhYbp4=/735x0/algorithm-8507b849b8ee48e5887fda56916dd037.png"
    alt="2"
  />,
  <img
    className="imgWidht"
    src="https://bournetocode.com/projects/GCSE_Computing_Fundamentals/pages/img/computer-network.jpg"
    alt="3"
  />,
  <img
    className="imgWidht"
    src="https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg"
    alt="4"
  />,
];

const Home = () => {
  const getCourse = useLoaderData();

  return (
    <div>
      <div>
        <Row className="my-4">
          <Col lg="3">
            <CourseList></CourseList>
          </Col>
          <Col lg="9">
            <div className="layout">
              <Carousel
                slides={slides}
                autoplay={true}
                interval={5000}
                arrows={true}
                // onSlideChange={callback}
              />
            </div>
          </Col>
        </Row>
      </div>
    <div className="mt-[60px] text-start bg-gray-100 p-4 rounded-4">
    <h3 className="text-blue-700">Professional Certificates</h3>
        <h1 className="fs-1 font-extralight my-4">
          Get job-ready for an in-demand career. 
        </h1>
        <h2 className="font-normal">Break into a new field like
          information technology or data science.<br></br> No prior experience necessary
          to get started.</h2>
    </div>
      <Marquee
        className="marqWidth"
        speed={50}
        pauseOnHover={true}
        gradientWidth="50px"
      >
        <div className="marqDesign">
          {getCourse.map((item) => (
            <CardForHome key={item.id} item={item}></CardForHome>
          ))}
        </div>
      </Marquee>

      <div className="mt-5">
        <TypeAnimation
          sequence={[
            "What You Will Learn?", // Types 'One'
            3000, // Waits 1s
            "You can build and train a neural network with TensorFlow.", // Deletes 'One' and types 'Two'
            3000, // Waits 2s
            "Also can apply best practices for machine learning development. ", // Types 'Three' without deleting 'Two'
            5000,
            "Your models generalize to data and tasks in the real world.",
            4000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          deletionSpeed={60}
          speed={30}
          style={{ fontSize: "35px" }}
        ></TypeAnimation>
      </div>

      <div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
