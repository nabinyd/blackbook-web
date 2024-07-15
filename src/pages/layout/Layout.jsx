import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar.jsx'
import Footer from './Footer.jsx';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';
import Loader from '../../utils/Loader.jsx';

function Layout() {
    const { isUserLoggedIn, loading } = useContext(UserserviceContext);

    useEffect(() => {
        console.log(isUserLoggedIn);
    }, [isUserLoggedIn])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <Navbar />
            <Outlet />
            {/* {!isDashboard && <Footer />} */}
        </>
    )
}

export default Layout