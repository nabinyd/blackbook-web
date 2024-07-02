// Create a signup page ui with input fields for email, password, fullname, username, and a submit button

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/svgexport-64.svg';

export default function SignupPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(email, password, fullname, username);
        // usersService.login({ email, password });
    }

    return (
        <div className='bg-background-color h-screen'>
            <div className='w-9/12 mx-auto flex items-center justify-between h-screen'>

                <div className=' w-1/2 flex flex-col items-center justify-start text-center text-white mb-20'>
                    <img src={logo} alt="logo" className='h-24 w-24 mb-5' />
                    <h3>
                        A Collection of Innovative Projects by Aspiring Graduates
                    </h3>
                </div>
                <div className='w-full  text-white'>
                    <div className=' flex flex-col items-end'>

                        <h1 className='text-3xl font-bold mb-3'>Create an account</h1>
                        <p className='text-sm text-gray-500'>Sign up to get started</p>
                        <form className='w-2/4 mt-10'>
                            <div className='mb-4'>
                                <label htmlFor='fullname' className='block text-sm font-medium text-gray-500'>Full Name</label>
                                <input type='text' id='fullname' className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 rounded-md shadow-sm focus:outline-none  ' value={fullname} onChange={(e) => setFullname(e.target.value)} />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='username' className='block text-sm font-medium text-gray-500'>Username</label>
                                <input type='text' id='username' className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 rounded-md shadow-sm focus:outline-none  ' value={username} onchange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-500'>Email</label>
                                <input type='email' id='email' className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 rounded-md shadow-sm focus:outline-none  ' />
                            </div>
                            <div className='mb-8'>
                                <label htmlFor='password' className='block text-sm font-medium text-gray-500'>Password</label>
                                <input type='password' id='password' className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 rounded-md shadow-sm focus:outline-none  ' />
                            </div>
                            <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none'>Sign up</button>
                            <div className='mt-5 text-center'>
                                <p className='text-sm text-gray-500'>Already have an account? <Link to='/login' className='text-blue-600'>Log in</Link></p>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}