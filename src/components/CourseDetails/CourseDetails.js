import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseList from "../LeftSide/CourseList";
import "./CourseDetails.css";
import { Col, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import {FaRegFilePdf} from 'react-icons/fa';


const CourseDetails = () => {
  const loadDetails = useLoaderData();
  const { id, details, title, total_enrolled, image_url } = loadDetails;
 
  const ref = React.createRef();

  return (
    <Row className="my-4">
    <Col lg='3'>
    
    <CourseList></CourseList>
    </Col>
    <Col lg='9'>
    <div>
<div className="window border rounded-4 bg-blue-100">
  <div className="p-2 text-white fs-2 rounded-4 bg-blue-700">
    <div className="d-flex align-items-center "><span className="mx-auto">{title}</span><p className="mb-0 cursor-pointer">
     <Pdf targetRef={ref} filename="Course Info.pdf">
    {({ toPdf }) => <FaRegFilePdf onClick={toPdf}></FaRegFilePdf>}
    </Pdf>
    </p></div> 
   
  </div>
  <figure><img className="imgWidth mx-auto m-3 rounded-4" src={image_url} alt="img"/></figure>
  <div className="card-body">
    <h1 className="card-title text-blue-800 mx-auto fs-2">Total Students Enrolled: {total_enrolled}</h1>
    <p ref={ref} className="p-4 text-start"><span className="text-blue-900 font-semibold fs-5">Course Details:</span><br></br> {details}</p>
    <div className="card-actions justify-center">
     <Link to={`/checkout/${id}`}> <button className="btn btn-warning mb-5 ">Get Premium Access</button></Link>
    </div>
</div>
</div>

 
    </div>
    </Col>
</Row>
    
  );
};

export default CourseDetails;
