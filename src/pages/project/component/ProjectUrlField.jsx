import React from 'react'

export default function ProjectUrlField({
    projectData,
    handleInputChange
}) {
    return (
        <div className='mb-8'>
            <label htmlFor='project url' className='block text-sm font-medium text-gray-300'>Project URL</label>
            <input className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.projectUrl}
                onChange={handleInputChange}
                name='projectUrl'
                type='text'
            />
        </div>
    )
}
