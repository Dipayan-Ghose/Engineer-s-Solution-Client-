import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import CourseCard from "../CourseCard/CourseCard";
import CourseList from "../LeftSide/CourseList";
import { Carousel } from "3d-react-carousal";
import "./home.css";
import { Link, useLoaderData } from "react-router-dom";
import CardForHome from "./CardForHome";
import Marquee from "react-fast-marquee";
import Contact from "../Contact/Contact";
import { TypeAnimation } from "react-type-animation";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <h2 className="font-normal">
          Break into a new field like information technology or data science.
          <br></br> No prior experience necessary to get started.
        </h2>
      </div>
      <div
        className="mt-16"
        data-aos="fade-left"
        data-aos-delay="70"
        data-aos-duration="900"
      >
        <h3 className="underline text-blue-700 text-start ">
          Get Your Favourite Course ->{" "}
        </h3>
      </div>
      <Marquee
        className="marqWidth"
        speed={50}
        pauseOnHover={true}
        gradientWidth="50px"
      >
        <div className="marqDesign ">
          {getCourse.map((item) => (
            <CardForHome key={item.id} item={item}></CardForHome>
          ))}
        </div>
      </Marquee>

      <div className="text-gray-600 body-font">
        <div className="container py-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div
              className="cardItem relative "
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="900"
            >
              <div className="h-[400px] bg-gray-100 bg-opacity-75 px-4 pt-10 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Topics
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Algorithms
                </h1>
                <p className="leading-relaxed mb-3">
                  In mathematics and computer science, an algorithm is a finite
                  sequence of rigorous instructions, typically used to solve a
                  class of specific problems or to perform a computation.
                  Algorithms are used as specifications for performing
                  calculations.
                </p>
                <a className="text-indigo-500 inline-flex items-center absolute bottom-16 right-[20px] lg:left-[100px]">
                  <Link to={`/courseDetails/02`}> Want To Learn More?</Link>
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
            <div
              className="cardItem relative"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              <div className="h-[400px] bg-gray-100 bg-opacity-75 px-4 pt-10 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Topics
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Networking
                </h1>
                <p className="leading-relaxed mb-3">
                  Networking is the exchange of information and ideas among
                  people with a common profession or special interest, usually
                  in an informal social setting. Networking often begins with a
                  single point of common ground.
                </p>
                <a className="text-indigo-500 inline-flex items-center absolute bottom-16 right-[20px] lg:left-[100px]">
                  <Link to={`/courseDetails/05`}> Want To Learn More?</Link>
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.8K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    10
                  </span>
                </div>
              </div>
            </div>
            <div
              className="cardItem relative"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="900"
            >
              <div className="h-[400px] bg-gray-100 bg-opacity-75 px-4 pt-10 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Topics
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Web Programming
                </h1>
                <p className="leading-relaxed mb-3">
                  Web programming refers to the writing, markup and coding
                  involved in Web development, which includes Web content, Web
                  client and server scripting and network security.
                </p>
                <a className="text-indigo-500 inline-flex items-center absolute bottom-16 right-[20px] lg:left-[100px]">
                  <Link to={`/courseDetails/06`}>Want To Learn More?</Link>
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    2.4K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    12
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-0 max-h-[230px] lg:h-[70px] p-2 bg-blue-50 rounded">
        <TypeAnimation
          sequence={[
            "What You Will Learn?",
            3000,
            "You can build and train a neural network with TensorFlow.",
            3000,
            "Also can practice for machine learning development. ",
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

      <div
        className="mt-16"
        data-aos="fade-left"
        data-aos-delay="70"
        data-aos-duration="900"
      >
        <h3 className="italic text-blue-700 text-start ">
          WE OFFER THE MOST ATTRACTIVE DEAL!!
        </h3>
      </div>
      <div className="text-gray-600 mt-0 body-font">
        <div className="container px-5  mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            <br className="hidden sm:block" />
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-2 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  SKILL BUILDING
                </h2>
                <p className="leading-relaxed text-base">
                  Build skills using the tools and programming languages used by
                  software engineers.Build applications composed of
                  microservices and deploy using containers{" "}
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-3 md:w-1/3 flex ">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                   DEMAND
                </h2>
                <p className="leading-relaxed text-base">
                  Get started in the in-demand field of DevOps with a
                  Professional Certificate from IBM. Learn the foundations of
                  DevOps and cloud computing and develop hands-on skills using
                  the tools and programming languages used by software
                  engineers.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  <Link to={`/courseDetails/02`}></Link>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-2 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  CERTIFICATION
                </h2>
                <p className="leading-relaxed text-base">
                  This certificate will equip you with the key concepts and
                  technical know-how to build your skills and knowledge of
                  DevOps practices, tools and technologies and prepare you for
                  an entry-level role in Software Engineering.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  <Link to={`/courseDetails`}></Link>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-600 body-font">
        <div className="container px-5 pt-20 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
             ABOUT
            </h1>
            <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            This is your path to a career in data analytics. In this program, you’ll learn in-demand skills that will have you job-ready in less than 6 months. No degree or experience required.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full" data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Certification
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full" data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                 Knowledge Buildup
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full" data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="500">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Trainning
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full" data-aos="fade-left"
              data-aos-delay="150"
              data-aos-duration="500">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Excercise
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full" data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="500">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Job Question
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full" data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="500">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Practical
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
