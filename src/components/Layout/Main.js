import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import CourseList from '../LeftSide/CourseList';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                
                    <Outlet></Outlet>

            </Container>
            
                   
        </div>
    );
};

export default Main;