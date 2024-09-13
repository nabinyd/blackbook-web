// Create a signup page ui with input fields for email, password, fullname, username, and a submit button

import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/svgexport-64.svg';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';
import Loader from '../../utils/Loader.jsx';
import showToast from '../../utils/ShowToast.js';

export default function SignupPage() {
    const { handleRegister, isUserLoggedIn, isCreatingUser } = useContext(UserserviceContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'fullName') {
            setFullname(value);
        } else if (name === 'userName') {
            setUsername(value);
        }
    }

    const handleSignup = () => {
        console.log(email, password, fullname, username);

        //validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email || !password || !fullname || !username) {
            showToast('Please fill all the fields', 2000, 'error');
            return;
        }
        if (!email.match(emailPattern)) {
            showToast('Please enter a valid email', 2000, 'error');
            return;
        }

        //validate password 
        if (password.length < 6 || password.length > 20 || !password.match(/[0-9]/) || !password.match(/[a-zA-Z]/)) {
            showToast('Password must be between 6 and 20 characters and must contain at least one number and one letter', 2000, 'error');
            return;
        }

        handleRegister({ email, password, fullname, username });
    }

    useEffect(() => {
        if (isUserLoggedIn) {
            console.log('User logged in');
            navigate('/');
        }
    }, [isUserLoggedIn])


    if (isCreatingUser) {
        return <Loader />
    }

    return (

            <div className='sm:w-9/12 mx-auto sm:flex sm:items-center sm:justify-center'>
                {/* <div className='sm:w-1/2 sm:flex sm:flex-col items-center justify-start text-center hidden  content-none '>
                    <img src={logo} alt="logo" className='h-24 w-24 mb-5' />
                    <h3 className='text-lg '>
                        A Collection of Innovative Projects by Aspiring Graduates
                    </h3>
                </div> */}
                <div className='border  flex flex-col justify-center  sm:items-center p-6 bg-neutral-900 rounded-md border-neutral-600 mt-9 shadow-lg shadow-zinc-800 drop-shadow-lg m-3'>
                    <form className='w-80 flex flex-col justify-center'>
                        <div className='text-center'>
                            <h1 className='text-3xl font-bold'>Create an account</h1>
                            <p className='text-sm text-gray-500 mb-6'>Sign up to get started</p>
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor='fullname' className='block text-sm font-medium text-gray-300'>Full Name</label>
                            <input
                                type='text'
                                className='w-full px-3 py-2 mt-1 text-sm  focus:outline-none focus:border-gray-400 bg-dark-jet  rounded-md border-[0.5px] border-gray-700'
                                value={fullname}
                                name='fullName'
                                onChange={handleInputChange} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='username' className='block text-sm font-medium text-gray-300'>Username</label>
                            <input
                                type='text'
                                className='w-full px-3 py-2 mt-1 text-sm  focus:outline-none focus:border-gray-300 bg-dark-jet  rounded-md border-[0.5px] border-gray-700'
                                value={username}
                                name='userName'
                                onChange={handleInputChange}
                            />

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-300'>Email</label>
                            <input
                                type='email'
                                id='email'
                                className='w-full px-3 py-2 mt-1 text-sm  focus:outline-none focus:border-gray-300 bg-dark-jet  rounded-md border-[0.5px] border-gray-700'
                                value={email}
                                name='email'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-300'>Password</label>

                            <input
                                type={showPassword ? "text" : "password"}
                                id='password'
                                className='w-full px-3 py-2 mt-1 text-sm  focus:outline-none focus:border-gray-300 bg-dark-jet  rounded-md border-[0.5px] border-gray-700'
                                value={password}
                                name='password'
                                onChange={handleInputChange}
                            />

                            <div className='flex justify-end mt-1'>
                                <button type='button' onClick={() => setShowPassword(!showPassword)} className='text-xs font-extralight text-gray-200 focus:outline-none'>{showPassword ? 'Hide' : 'Show'}</button>
                            </div>
                        </div>
                        <button
                            type='submit'
                            onClick={(e) => {
                                e.preventDefault();
                                handleSignup();
                            }}
                            className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none'>
                            Sign up
                        </button>

                        <div className='mt-5 text-center'>
                            <p className='text-sm text-gray-500'>Already have an account? <Link to='/login' className='text-blue-300'>Log in</Link></p>
                        </div>
                    </form>
                </div>

            </div>

    )
}