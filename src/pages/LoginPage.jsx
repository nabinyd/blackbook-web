// Create a login page ui
import { React, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/svgexport-64.svg';

export default function LoginPage() {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
        // usersService.login({ email, password });

    }

    return (
        <div className='bg-background-color h-screen text-white'>
            <div className='w-8/12 mx-auto flex items-center justify-between h-screen'>

                <div className=' w-1/2 flex flex-col items-center justify-start text-center'>
                    <img src={logo} alt="logo" className='h-24 w-24 mb-5' />
                    <h3>
                        A Collection of Innovative Projects by Aspiring Graduates
                    </h3>
                </div>
                <div className='w-full flex flex-col items-end'>
                    <h1 className='text-3xl font-bold '>Welcome back</h1>
                    <p className='text-sm text-gray-500'>Log in to your account</p>
                    <form className='w-2/4 mt-10'>
                        <div className='mb-4'>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-500'>Email</label>
                            <input type='email' id='email' className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 rounded-md shadow-sm focus:outline-none  ' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-500'>Password</label>
                            <input type='password' id='password' className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 rounded-md shadow-sm focus:outline-none  ' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none' onClick={handleLogin}>Log in</button>
                        <div className='mt-5 text-center'>
                            <p className='text-sm text-gray-500'>Don't have an account? <Link to='/signup' className='text-blue-600'>Sign up</Link></p>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    )
}