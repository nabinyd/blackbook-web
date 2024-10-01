import React from 'react'

export default function EmailField({
    projectData,
    handleInputChange
}) {
    return (
        <div className='mb-8'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-300'>Email <sup>*</sup></label>
            <input className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                type='email'
                name='email'
                value={projectData.email}
                onChange={handleInputChange}
                required
            />
        </div>
    )
}
