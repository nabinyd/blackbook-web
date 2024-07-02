// Create a context to manage user login state
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import usersService from '../service/UsersService';

const UserserviceContext = createContext();

const UserserviceContextProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

    const home = async () => {
        try {
            const response = await usersService.home();
            console.log(response);
            setUserData(response.message);
        } catch (error) {
            console.error(error);
        }
    }

    const handleLogin = async ({ email, password }) => {
        try {
            const response = await usersService.login({ email, password });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const handleRegister = async ({ email, password, fullname, username }) => {
        try {
            const response = await usersService.register({ fullname, username, email, password });
            console.log(response);
        } catch (error) {
            console.error(error);
        }

    }




    return (
        <UserLoginContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserLoginContext.Provider>
    )
}


export { UserserviceContextProvider, UserserviceContext };