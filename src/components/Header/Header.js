import React, { useContext } from "react";
import {  Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Image } from "react-bootstrap";
import { authContext } from "../Context/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaUser} from 'react-icons/fa';
import headerLogo from './headerLogo.webp';

const Header = () => {
const {user, providerLogout} = useContext(authContext); //destructured

const clickLogout=()=>{
  toast.success("Sign Out Successfully",{ position: "bottom-center",autoClose: 1000});
  providerLogout()
  .then(()=>{})
  .catch(error=>console.error(error))
}

  return (
  
<div className="sticky top-0 z-50  ">
<Navbar  collapseOnSelect expand="lg" variant="dark" className="headerDesign  bg-gradient-to-r from-blue-500 to-cyan-500">
    <Container  >
          <Image src={headerLogo} className='logo rounded-5 mx-1 '></Image> 
    <Navbar.Brand ><Link to='/' className=' fs-4 shadow p-2 rounded linkDes'> Engineers' <span className="text-yellow-300">Solution</span> </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="me-auto m-2 gap-1 lg:m-0 lg:gap-0 ">
          <Link to='/' className='linkDesign'>Home</Link>
          <Link to='/courses' className='linkDesign'>Courses</Link>
          <Link to='/contact' className='linkDesign'>Contact</Link>
          <Link to='/about' className='linkDesign'>About</Link>

        </Nav>
        <Nav className='img'>
          {
            user ?
             <div className=" rightSide">
              <div className='my-auto title'> 
               <h3 href="" className='  ' title={user?.displayName }> {user.uid? <Image style={{width: '35px'}} roundedCircle src={user?.photoURL}></Image> : <FaUser style={{width: '20px'}}></FaUser> }</h3>
              </div> 
              <div className=''> 
              <Link to='/' onClick={clickLogout} className="linkDesign m-2 ">Sign Out </Link> 
              </div> 
            
            </div>
           :        
           <div className=''> 
               <Link to='/login' className=" linkDesign m-2 ">Sign In</Link> 
           </div>
          }
         
        </Nav>
      </Navbar.Collapse>
     
    </Container>
    <ToastContainer />
  </Navbar>
</div>
    
    );
};

export default Header;


