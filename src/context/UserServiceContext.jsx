// Create a context to manage user login state
import React, { createContext, useState, useEffect } from 'react';
import usersService from '../service/Users_service.js';
import { initialUserData, TOKEN } from '../Constant.js';
import Cookies from 'js-cookie';
import { auth } from '../utils/firebase_client.js';
import { fetchSignInMethodsForEmail, getAuth, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';
import showToast from '../utils/ShowToast.js';

const UserserviceContext = createContext();

const UserserviceContextProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userData, setUserData] = useState(initialUserData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [validatingToken, setValidatingToken] = useState(false);
    const [loadingGoogle, setLoadingGoogle] = useState(false);
    const [googleError, setGoogleError] = useState(null);
    const [isCreatingUser, setIsCreatingUser] = useState(false);


    const handleSendResetPasswordEmail = async (email) => {
        try {
            console.log(email);
            if (!email) {
                showToast("Please enter a valid email address", 2500, "error");
                return;
            }
            const response = await usersService.sendResetPasswordEmail(email);
            console.log(response);
            if (response.statusCode === 200) {
                showToast(response.message, 2500, "success");
            } else {
                showToast(response.message, 2500, "error");
            }
        } catch (error) {
            console.error(error);
        }
    }



    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();

            await signInWithPopup(auth, provider).then(async (result) => {
                setLoadingGoogle(true);
                const creadentials = GoogleAuthProvider.credentialFromResult(result);
                console.log("credentials", creadentials);
                const token = creadentials.idToken;


                await usersService.googleLogin(token).then((response) => {
                    console.log(response);
                    if (response.statusCode === 200) {
                        setIsUserLoggedIn(true);
                        setUserData(response.data.userData);
                        Cookies.set('idToken', response.data.idToken);
                        setLoadingGoogle(false);
                        showToast("You are successfully logged in!", 2500, "success");
                    } else {
                        setIsUserLoggedIn(false);
                        setUserData(initialUserData);
                        setLoadingGoogle(false);
                        setGoogleError("Error logging in with google");
                        showToast("Error logging in with google", 2500, "error");
                    }
                });
            })
        } catch (error) {
            console.error(error);
            setGoogleError(error);
            setLoadingGoogle(false);
            throw error;
        }
    }

    const validateToken = async () => {
        try {
            setValidatingToken(true);
            const response = await usersService.validateToken();
            console.log(response);
            if (response.statusCode === 200) {
                setIsUserLoggedIn(true);
                setUserData(response.data.userData);
                setValidatingToken(false);
            } else {
                setIsUserLoggedIn(false);
                setUserData(initialUserData);
                setValidatingToken(false);
            }
        } catch (error) {
            console.error(error);
            setValidatingToken(false);
        }
    }




    const handleLogin = async ({ email, password }) => {
        console.log(email, password);
        try {
            setLoading(true);
            setError(null);
            const response = await usersService.login({ email, password });
            const { statusCode, success, data } = response;

            if (statusCode === 200) {
                setIsUserLoggedIn(true);
                setUserData(data.userData);
                Cookies.set("idToken", data.idToken);
                setLoading(false);
            } else {
                setIsUserLoggedIn(false);
                setUserData(initialUserData);
                setLoading(false);
                showToast("Invalid email or passwords", 2500, "error");
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            showToast(error, 2500, "error");
        }
    }


    const fetchUserData = async () => {
        try {
            console.log(isUserLoggedIn);
            if (isUserLoggedIn) {
                const response = await usersService.getUserData();
                if (response.statusCode === 200) {
                    setIsUserLoggedIn(true);
                    setUserData(response.data);
                    setLoading(false);
                }
            }
        } catch (error) {
            console.error(error);
            setError(error);
            setLoading(false);
        }
    }

    const handleRegister = async ({ email, password, fullname, username }) => {
        try {
            setIsCreatingUser(true);
            const response = await usersService.register({ email, password, fullname, username });
            console.log(response);
            setError(null);
            if (response.statusCode === 201) {
                const { statusCode, success, data } = response;
                console.log(data.idToken);
                setIsUserLoggedIn(true);
                setUserData(data.userData);
                Cookies.set('idToken', data.idToken);
                showToast("You are successfully registered!", 2500, "success");
                setIsCreatingUser(false);

            } else {
                setIsUserLoggedIn(false);
                setUserData(initialUserData);
                showToast(response.message, 2500, "error");
                setIsCreatingUser(false);
            }
        } catch (error) {
            console.error(error);
            setError(error);
            showToast(error, 2500, "error");
            setIsCreatingUser(false);
        }
    }

    const handleLogout = async () => {
        try {
            const idToken = Cookies.get('idToken');
            if (!idToken) {
                setIsUserLoggedIn(false);
                setUserData(initialUserData);
                return;
            }
            const response = await usersService.logout();
            console.log(response);
            if (response.statusCode === 200) {
                setIsUserLoggedIn(false);
                setUserData(initialUserData);
                Cookies.remove('idToken');
                setLoading(false);
                setError(null);
                setGoogleError(null);
                showToast("You are successfully logged out!", 2500, "success");
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const handleDeleteAccount = async () => {
        try {
            const response = await usersService.deleteUser();
            console.log(response);
            if (response.statusCode === 200) {
                setIsUserLoggedIn(false);
                setUserData(initialUserData);
                Cookies.remove('idToken');
                showToast("Your account has been deleted!", 2500, "success");
            }
        } catch (error) {
            console.error(error);
            showToast(error, 2500, "error");
        }
    }

    return (
        <UserserviceContext.Provider value={{
            isUserLoggedIn,
            setIsUserLoggedIn,
            userData,
            setUserData,
            handleLogin,
            handleRegister,
            isCreatingUser,
            handleLogout,
            fetchUserData,
            loading,
            error,
            validatingToken,
            validateToken,
            handleGoogleLogin,
            loadingGoogle,
            googleError,
            handleSendResetPasswordEmail,
            handleDeleteAccount,
        }}>
            {children}
        </UserserviceContext.Provider>
    )
}


export { UserserviceContextProvider, UserserviceContext };