import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './home.css';

const Home = () => {
  return (

        <Carousel className="layout">
          <Carousel.Item interval={1000}>
            <img
              className="d-block img" 
              src="https://w10.naukri.com/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg"
              alt="data structure"
            />
            <Carousel.Caption>
              <p>Data Structure</p>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block img"
              src="https://www.investopedia.com/thmb/s56ubR5UguDpmw4xitrCznhYbp4=/735x0/algorithm-8507b849b8ee48e5887fda56916dd037.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Algorithms</p>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img"
              src="https://bournetocode.com/projects/GCSE_Computing_Fundamentals/pages/img/computer-network.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>Computer Networking</p>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img"
              src="https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>Web Programming</p>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    
  );
};

export default Home;
