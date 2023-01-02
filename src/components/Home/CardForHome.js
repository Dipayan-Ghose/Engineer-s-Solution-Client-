import React, { Component, useContext } from "react";
import { Button } from "react-bootstrap";
import ReactCardCarousel from "react-card-carousel";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { authContext } from "../Context/AuthProvider/AuthProvider";
import "./home.css";

const CardForHome = ({ item }) => {
  const { id, rating, image_url, details, total_enrolled, title } = item;
  const {loading}= useContext(authContext);
  return (
    <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
      <div className="cardStyle">
          {loading ? (
            <Skeleton
              height="150px"
              width="300px"
              borderRadius="10px"
            ></Skeleton>
          ) : (
            <div className=" mx-auto rounded-4 bg-base-100 shadow-xl">
              <figure>
                <img className="" src={image_url} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between">
                  <h5 className="text-primary">
                    Course Rating: {rating.number}
                  </h5>

                  <Link to={`/courseDetails/${id}`}>
                    <Button variant="primary"> Course Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
      </div>
    </ReactCardCarousel>
  );
};

export default CardForHome;
