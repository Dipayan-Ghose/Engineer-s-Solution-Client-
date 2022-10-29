import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import './Courselist.css';

const CourseList = ({course}) => {
const [courses, setCourses]= useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/course')
        .then(res=> res.json())
        .then(data=> setCourses(data));
    },[])

   

    return (
        <div>
            {
                courses.map(course=> <ul key={course.id} className="p-2 fs-5 text-center tableDesign  bg-base-100 border border-2 rounded-box"> 
                     <Link to={`/courseDetails/${course.id}`} className='tableDesign'><li className="">{course.course_name}</li></Link>
                     </ul> )

                     
                     
            }
        </div>
    );
};

export default CourseList;