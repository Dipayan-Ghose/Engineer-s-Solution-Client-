import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Course from "../Course/CourseItems";
import CourseCard from "../CourseCard/CourseCard";
import CourseDetails from "../CourseDetails/CourseDetails";
import Faq from "../FAQ/Faq";
import Home from "../Home/Home";
import Main from "../Layout/Main";

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
                loader: ()=> fetch('http://localhost:5000/courseDetails'),
                element:<Course></Course>
            },
            {
                path: '/faq',
                element:<Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courseDetails/:id',
                loader: ({params})=> fetch(`http://localhost:5000/courseDetails/${params.id}`),
               
                element: <CourseDetails></CourseDetails>
            }


        ]
        
    }
   
])

// {
//     path: '*',
//     element: <h3>404 Not Found Anything! </h3>
// }