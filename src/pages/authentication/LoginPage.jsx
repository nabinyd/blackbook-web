// Create a login page ui
import { React, useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/svgexport-64.svg';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';
import Loader from '../../utils/Loader.jsx';
import showToast from '../../utils/ShowToast.js';
import { provider, auth, signInWithPopup } from '../../utils/firebase_client.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function LoginPage() {
    const navigate = useNavigate();
    const { handleLogin, isUserLoggedIn, userData, loading, handleGoogleLogin, } = useContext(UserserviceContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogIn = (e) => {
        e.preventDefault();
        handleLogin({ email, password })
    }

    const handlegoogleLogin = async (e) => {
        e.preventDefault();
        handleGoogleLogin();
    }


    useEffect(() => {
        if (isUserLoggedIn) {
            navigate('/profile');
        }
    }, [isUserLoggedIn, userData]);


    if (loading) {
        return <Loader />
    }


    return (

        <div className='sm:w-9/12 mx-auto sm:flex sm:items-center sm:justify-center p-5'>
            {/* <div className=' sm:w-1/2 sm:flex sm:flex-col items-center justify-start text-center hidden  content-none '>
                <img src={logo} alt="logo" className='h-24 w-24 mb-5' />
                <h3 className='text-lg'>
                    A Collection of Innovative Projects by Aspiring Graduates
                </h3>
            </div> */}
            <div className=' border  flex flex-col justify-center  sm:items-center p-6 bg-neutral-900 rounded-md border-neutral-600 mt-9 shadow-lg shadow-zinc-800 drop-shadow-lg'>
                <form className='sm:w-80 flex flex-col justify-center'>
                    <div className='text-center mb-4'>
                        <h1 className='text-3xl font-semibold text-center'>Welcome back!</h1>
                        <p className='text-center text-sm text-gray-400'> Log in to your account</p>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-400'>Email</label>
                        <input type='email' id='email' className='w-full px-3 py-2 mt-1 text-sm  focus:outline-none focus:border-gray-300 bg-dark-jet  rounded-md border-[0.5px] border-gray-700' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='block text-sm font-medium text-gray-400'>Password</label>
                        <input type={showPassword ? "text" : "password"} id='password' className='w-full px-3 py-2 mt-1 text-sm  focus:outline-none focus:border-gray-300 bg-dark-jet  rounded-md border-[0.5px] border-gray-700' value={password} onChange={(e) => setPassword(e.target.value)} />
                        {/* add eye icon */}
                        <div className='flex justify-end mt-1'>
                            <button type='button' onClick={() => setShowPassword(!showPassword)} className='text-xs font-extralight text-gray-200 focus:outline-none'>{showPassword ? 'Hide' : 'Show'}</button>
                        </div>
                    </div>
                    {/* {loading ? <Loader /> : null} */}
                    <button type='submit' className='w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none' onClick={handleLogIn}>Log in</button>
                    {/* <div className=' text-center'>
                        <p className='text-sm m-3'>or</p>
                        <button className='w-full bg-red-500 hover:bg-red-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none '
                            onClick={handlegoogleLogin}
                        >
                            <FontAwesomeIcon icon={faGoogle} className='mr-2' />
                            Sign in with Google
                        </button>
                    </div> */}
                    {/* <div className=' text-center'>
                            <p className='text-sm m-3'>or</p>
                            <button className='w-full bg-red-500 hover:bg-red-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none '
                                onClick={handlegoogleLogin}
                            >
                                <FontAwesomeIcon icon={faGoogle} className='mr-2' />
                                Sign in with Google
                                </button>
                                
                                </div> */}
                    <div className='mt-5 text-center'>
                        <div className=' text-center'>
                            <Link to='/reset-password' className='text-sm'>Reset password</Link>
                        </div>
                        <p className='text-sm text-gray-500'>Don't have an account? <Link to='/signup' className='text-blue-300'>Sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default LoginPage; 