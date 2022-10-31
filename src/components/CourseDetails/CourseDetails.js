import React from "react";
import { useLoaderData } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const loadDetails = useLoaderData();
  console.log(loadDetails);

  const { id, details, title, total_enrolled, image_url } = loadDetails;

  return (
    <div>
<div className="window border rounded-4 mt-3 bg-blue-200">
  <div className="flex justify-center p-2 text-white fs-2 rounded-4 bg-blue-700">{title}</div>
  <figure><img className="imgWidth mx-auto m-3 rounded-4" src={image_url} alt="img"/></figure>
  <div className="card-body">
    <h1 className="card-title text-blue-800 mx-auto fs-2">Total Students Enrolled: {total_enrolled}</h1>
    <p className="p-4 text-start">{details}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-warning mb-5 ">Get Premium Access</button>
    </div>
</div>
</div>

 
    </div>
  );
};

export default CourseDetails;
