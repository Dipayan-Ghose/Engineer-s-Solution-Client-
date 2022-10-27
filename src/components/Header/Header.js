import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Button } from "react-bootstrap";

const Header = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (


    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand ><Link to='/' className='fs-4 shadow p-2 rounded linkDes'> Engineer's Solution </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to='/courses' className='linkDesign'>Courses</Link>
            <Link to="/faq" className="linkDesign">FAQ</Link>
            <Link to='/blog' className='linkDesign'>Blog</Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Button >Sign In</Button>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>



    

    );
};

export default Header;


