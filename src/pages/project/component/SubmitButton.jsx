import React from 'react'
import Loader from '../../../utils/Loader.jsx';

export default function SubmitButton({isCreatingProject }) {
    return (
        <div className='flex justify-center'>
            {isCreatingProject ? <Loader /> : <button type='submit' className='w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none' >Create Project</button>}
        </div>
    )
}
