import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import NavBar from '../shared/NavBar';

const Main = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;