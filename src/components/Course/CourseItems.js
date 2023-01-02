import React, { useState,useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import CourseDetails from '../CourseDetails/CourseDetails';
import CourseList from '../LeftSide/CourseList';
import './CourseItem.css';

const CourseItems = () => {
const getItems= useLoaderData();

    return (
        <Row className='my-4'>
    <Col lg='3'>
    <CourseList></CourseList>
    </Col>
    <Col lg='9'>
    <div className='cardDesign'>
         {
            getItems.map(item=> <CourseCard 
                key={item.id}
                item={item}
            ></CourseCard>)
         }
    </div>
    </Col>
</Row>
        
    );
};

export default CourseItems;