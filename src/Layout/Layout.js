import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const MainLayout = () => {
    return (
        <main>
            <Header></Header>
            <Outlet></Outlet>
            
        </main>
    );
};

export default MainLayout;