import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar.jsx'
import { UserserviceContext } from '../../context/UserServiceContext.jsx';
import Loader from '../../utils/Loader.jsx';

function Layout() {
    const { isUserLoggedIn, validateToken, validatingToken } = useContext(UserserviceContext);

    useEffect(() => {
        if (!isUserLoggedIn) {
            validateToken();
        }
    }, []);
    

    if (validatingToken) {
        return <Loader />
    }


    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout