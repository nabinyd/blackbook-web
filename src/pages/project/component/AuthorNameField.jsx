import React from 'react'


export default function AuthorNameField({
    projectData,
    handleInputChange
}) {
    return (
        <div className='mb-8'>
            <label htmlFor='authorname' className='block text-sm font-medium text-gray-300'>Author Name <sup>*</sup></label>
            <div className='flex items-center gap-x-5'>
                <input className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                    type='text'
                    name='authorName'
                    value={projectData.authorName}
                    onChange={handleInputChange}
                    required
                />
            </div>
        </div>
    )
}
