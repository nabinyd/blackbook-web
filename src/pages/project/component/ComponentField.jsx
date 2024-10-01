import React, { useState } from 'react'

export default function ComponentField({
    projectData,
    setProjectData
}) {
    const [newComponent, setNewComponent] = useState('');

    const handleAddComponent = (e) => {
        e.preventDefault();
        if (newComponent) {
            setProjectData({ ...projectData, components: [...projectData.components, newComponent] });
            setNewComponent('');
        }
    }



    return (
        <div className='mb-8'>
            <label htmlFor='components' className='block text-sm font-medium text-gray-300'>Components <sup>*</sup></label>
            <input className='w-96 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                type='text'
                name='components'
                value={newComponent}
                onChange={(e) => setNewComponent(e.target.value)}
            />
            <button onClick={handleAddComponent} className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none ml-2 w-fit' >Add Component</button>
            <ul className='flex mt-2'>
                {projectData.components && projectData.components.map((component, index) => (
                    <li key={index} className=' bg-dark-jet px-3 py-1 text-sm rounded mx-1 w-fit'>{component}</li>
                ))}
            </ul>
        </div>
    )
}
