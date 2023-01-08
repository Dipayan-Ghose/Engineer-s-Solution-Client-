import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import "./Courselist.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useContext } from "react";
import { authContext } from "../Context/AuthProvider/AuthProvider";



const CourseList = ({ course }) => {
   const {loading}= useContext(authContext); 
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://develop-course-server.vercel.app/course")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div >
        <div className="card bg-base-100 rounded rounded-4 cardHeight shadow-xl">
        <div className="card-body" >
        { 
        loading? <Skeleton count={6} height='50px' borderRadius='10px'></Skeleton> :
        courses.map((course) => (
        <ul
          key={course.id}
          className="p-2 fs-5 text-center tableDesign  bg-base-100 border border-2 rounded-box"
          data-aos="fade-right"
          data-aos-delay="70"
          data-aos-duration="900"
          >
          <Link to={`/courseDetails/${course.id}`} className="tableDesign"> 
            <li className="CourseName" >{course.course_name}</li>
          </Link>
        </ul>
      ))}
        </div>    
    </div>
   
    
    </div>
  );
};

export default CourseList;
