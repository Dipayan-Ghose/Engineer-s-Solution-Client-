import React, { Component, useContext } from "react";
import { Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { authContext } from "../Context/AuthProvider/AuthProvider";
import "./home.css";

const CardForHome = ({ item }) => {
  const { id, rating, image_url, details, total_enrolled, title } = item;
  const {loading}= useContext(authContext);
  return (
      <div className="">
          {loading ? (
            <Skeleton
              height="150px"
              width="300px"
              borderRadius="10px"
            ></Skeleton>
          ) : (
            <div className="mx-auto rounded-4 bg-base-100 shadow-2xl m-5 ">
              <figure>
                <img className="marqImg" src={image_url} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-700 justify-center">{title}</h2>
                <div className="card-actions justify-center my-3">
                  <Link to={`/courseDetails/${id}`}>
                    <Button variant="primary"> Show Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
      </div>
  );
};

export default CardForHome;
