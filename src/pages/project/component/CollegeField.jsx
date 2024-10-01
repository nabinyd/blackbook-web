import React from 'react'

export default function CollegeField({
    projectData,
    handleInputChange
}) {
    return (
        <div className='mb-8'>
            <label htmlFor='college' className='block text-sm font-medium text-gray-300'>College</label>
            <input className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet   '
                type='text'
                value={projectData.college}
                onChange={handleInputChange}
                name='college'
            />
        </div>
    )
}
