import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Checkout from "../Checkout/Checkout";
import Contact from "../Contact/Contact";
import Course from "../Course/CourseItems";
import CourseCard from "../CourseCard/CourseCard";
import CourseDetails from "../CourseDetails/CourseDetails";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Page404 from "../Page404/Page404";
import Private from "../PrivateRoute/Private";
import Register from "../Register/Register";

export const routes=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: ()=> fetch('https://develop-course-server.vercel.app/courseDetails'),
                element:<Course></Course>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path: '/courseDetails/:id',
                loader: ({params})=> fetch(`https://develop-course-server.vercel.app/courseDetails/${params.id}`),
               
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/checkout/:id',
                loader: ({params})=> fetch(`https://develop-course-server.vercel.app/courseDetails/${params.id}`),
                element: <Private><Checkout></Checkout></Private>
            }


        ]
        
    },
    {
        path: '*', element: <Page404></Page404>
    }
   
])

