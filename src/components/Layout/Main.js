import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import CourseList from '../LeftSide/CourseList';

const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <div className='grid row'>
                    <div className='grid grid-col-4'>
                     <CourseList></CourseList>
                    </div>
                    <div className='grid grid-col-8'>
                        <Outlet></Outlet>
                    </div>
            
            </div>
                   
        </div>
    );
};

export default Main;