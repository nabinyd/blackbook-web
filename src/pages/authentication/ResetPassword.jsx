import React, { useState, useContext, useEffect } from 'react'
import { UserserviceContext } from '../../context/UserServiceContext.jsx';

export default function ResetPassword() {

    const [email, setEmail] = useState('');

    const { handleSendResetPasswordEmail } = useContext(UserserviceContext);

    const handleemailChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setEmail(e.target.value);
    }




    return (

        <div className='flex justify-center items-center w-64 mx-auto'>
            <div className='bg-[#121212] mt-9 rounded-lg shadow-lg border p-7 border-neutral-700  shadow-gray-900'>
                <h1 className='text-2xl text-white font-bold mb-5 text-center'>Reset Password</h1>
                <form className='flex flex-col gap-5'>
                    <input
                        className='bg-[#171717] p-3 rounded-lg text-white border-[0.25px] border-gray-700 '
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={handleemailChange}
                    />
                    <button
                        className='bg-blue-600 p-3 rounded-lg text-white w-36 mx-auto' onClick={() => 
                            handleSendResetPasswordEmail(email)
                        }>Reset Password</button>
                </form>
            </div>
        </div>
    )
}
