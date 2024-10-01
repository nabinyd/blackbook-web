import React from 'react'

export default function TitleField({
    projectData,
    handleInputChange
}) {
    return (
        <div className='mb-8'>
            <label htmlFor='Ptoject title' className='block text-sm font-medium text-gray-300'>Project Title <sup>*</sup></label>

            <input type='text' className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet  '
                value={projectData.title}
                onChange={handleInputChange}
                name='title'
                required
            />
        </div>
    )
}
