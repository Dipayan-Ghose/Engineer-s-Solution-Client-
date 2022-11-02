import React, { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Image } from "react-bootstrap";
import { authContext } from "../Context/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaArrowCircleDown , FaUser} from 'react-icons/fa';

const Header = () => {
const {user, providerLogout} = useContext(authContext); //destructured



  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);




const clickLogout=()=>{
  toast("Sign Out Successfully",{ position: "top-center",autoClose: 1000});
  providerLogout()
  .then(()=>{})
  .catch(error=>console.error(error))
}

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
        <Nav className=' img'>
          {
            user ?
             <div className="d-flex">
                <div className='my-auto title'> 
               <h3 href="" className='  ' title={user?.displayName }> {user.uid? <Image style={{width: '35px'}} roundedCircle src={user?.photoURL}></Image> : <FaUser style={{width: '20px'}}></FaUser> }</h3>
              </div> 
              <div className=''> 
              <Link to='/'><button onClick={clickLogout} className="linkDesign m-2 ">Sign Out</button> </Link> 
              </div> 
            
            </div>
           :        
           <div className=''> 
               <Link to='/login'><button className="linkDesign m-2">Sign In</button> </Link> 
           </div>
          }
         
          
        </Nav>
      </Navbar.Collapse>
    </Container>
    <ToastContainer />
  </Navbar>



    
    );
};

export default Header;


