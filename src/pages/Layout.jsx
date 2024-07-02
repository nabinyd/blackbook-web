import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './navbar.jsx'
import Footer from './Footer.jsx';

function Layout() {

    const location = useLocation();
    const isDashboard = location.pathname.includes('/dashboard');

    return (
        <>
            {!isDashboard && <Navbar />}
            <Outlet />
            {/* {!isDashboard && <Footer />} */}
        </>
    )
}

export default Layout