import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../LeftSide/CourseList';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container >
                
                    <Outlet></Outlet>

            </Container>
            <Footer></Footer>
                   
        </div>
    );
};

export default Main;