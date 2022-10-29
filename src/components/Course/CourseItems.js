import React, { useState,useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import CourseDetails from '../CourseDetails/CourseDetails';
import './CourseItem.css';

const CourseItems = () => {
const getItems= useLoaderData();
const [courses, setCourses]= useState([]);

console.log(getItems);

    useEffect(()=>{
        fetch('http://localhost:5000/course')
        .then(res=> res.json())
        .then(data=> setCourses(data));
    },[])


    return (
        <div className='cardDesign'>
         {
            getItems.map(item=> <CourseCard 
                key={getItems.course_id}
                item={item}
            ></CourseCard>)
         }
        </div>
    );
};

export default CourseItems;