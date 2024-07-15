// Create a context to manage user login state
import React, { createContext, useState, useEffect } from 'react';
import usersService from '../service/Users_service.js';
import { initialUserData } from '../Constant.js';




const UserserviceContext = createContext();

const UserserviceContextProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userData, setUserData] = useState(initialUserData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const validateToken = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log(token);
            if (token) {
                setLoading(true);
                const userData = localStorage.getItem("userData");
                console.log(userData);
                const response = await usersService.validateToken(token);
                console.log(response);

                if (response.statusCode === 200) {
                    setIsUserLoggedIn(true);
                    setUserData(JSON.parse(userData));
                    setLoading(false);
                } else {
                    setLoading(false);
                    setIsUserLoggedIn(false);
                    setUserData(initialUserData);
                    localStorage.removeItem("token");
                    localStorage.removeItem("userData");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    console.log(userData);

    const handleLogin = async ({ email, password }) => {
        try {
            setLoading(true);
            setError(null);
            const response = await usersService.login({ email, password });
            const { statusCode, success, data } = response;
            console.log(data);
            if (statusCode === 200 && success) {
                setIsUserLoggedIn(true);
                setUserData(data.userData);
                localStorage.setItem("token", data.idtoken);
                localStorage.setItem("userData", JSON.stringify(data.userData));
                setLoading(false);
                setError(null);
            } else {
                setIsUserLoggedIn(false);
                setUserData(initialUserData);
                setError("Invalid email or password");
                console.log(response.message);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }

    const fetchUserData = async () => {
        try {
            if (isUserLoggedIn) {
                const response = await usersService.getUserData();
                if (response.statusCode === 200) {
                    setIsUserLoggedIn(true);
                    setUserData(response.data);
                } else {
                    setIsUserLoggedIn(false);
                    setUserData({});
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleRegister = async ({ email, password, fullname, username }) => {
        try {
            const response = await usersService.register({ email, password, fullname, username });
            console.log(response);
            if (response.statusCode === 200) {
                setIsUserLoggedIn(true);
                setUserData(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleLogout = async () => {
        try {
            const response = await usersService.logout();
            console.log(response);
            if (response.statusCode === 200) {
                setIsUserLoggedIn(false);
                setUserData({});
                setLoading(false);
                localStorage.removeItem("token");
                localStorage.removeItem("userData");
            }
            console.log(userData);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        validateToken();
    }, [])

    console.log(isUserLoggedIn);


    return (
        <UserserviceContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, userData, setUserData, handleLogin, handleRegister, handleLogout, fetchUserData, loading, error, validateToken }}>
            {children}
        </UserserviceContext.Provider>
    )
}


export { UserserviceContextProvider, UserserviceContext };