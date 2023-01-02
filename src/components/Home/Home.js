import React from "react";
import { Col, Row } from "react-bootstrap";
import CourseCard from "../CourseCard/CourseCard";
import CourseList from "../LeftSide/CourseList";
import { Carousel } from "3d-react-carousal";
import "./home.css";
import { useLoaderData } from "react-router-dom";
import CardForHome from "./CardForHome";

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
  const getCourse= useLoaderData();
  

  return (
    <div>
      <Row className="my-4">
        <Col lg="3">
          <CourseList></CourseList>
        </Col>
        <Col lg="9" >
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

      <div className='cardDesign'>
         {
            getCourse.map(item=> <CardForHome
                key={item.id}
                item={item}
            ></CardForHome>)
         }
    </div>
    </div>
  );
};

export default Home;
