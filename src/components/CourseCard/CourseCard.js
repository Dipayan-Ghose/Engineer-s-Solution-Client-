import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ item, buttonHandle }) => {
  const { id, rating, image_url, details, total_enrolled, title } = item;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="imgWidth" src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length > 200 ? (
            <p className="text-start">{details.slice(0, 150) + "..."}</p>
          ) : (
            <p>{details}</p>
          )}
          <div className="card-actions justify-between">
            <h5 className="text-primary">Course Rating: {rating.number}</h5>

            <Link to={`/courseDetails/${id}`}>
              <Button
                variant="primary"
              > Course Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
