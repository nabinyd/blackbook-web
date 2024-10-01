import React from 'react'


export default function ProjectTypeField({
    projectData,
    handleInputChange,
    datastore
}) {
    return (
        <div className='mb-8'>
            <label htmlFor='project type' className='block text-sm font-medium text-gray-300'>Project Type <sup>*</sup></label>
            <select id="project type" className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.projectType}
                name='projectType'
                required
                onChange={handleInputChange}>
                {datastore.projectType.sort().map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>
            {/* <h1>{projectData.projectType}</h1> */}
        </div>
    )
}
