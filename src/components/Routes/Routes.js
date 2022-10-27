import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Course from "../Course/CourseItems";
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
                element:<Course></Course>
            },
            {
                path: '/faq',
                element:<Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    }

])