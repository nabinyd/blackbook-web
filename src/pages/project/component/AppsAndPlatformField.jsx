import React, { useState } from 'react'


export default function AppsAndPlatformField({
    projectData,
    setProjectData
}) {
    const [newAppAndPlatform, setNewAppAndPlatform] = useState('');

    const handleAddAppAndPlatform = (e) => {
        e.preventDefault();
        if (newAppAndPlatform) {
            setProjectData({ ...projectData, appAndPlatforms: [...projectData.appAndPlatforms, newAppAndPlatform] });
            setNewAppAndPlatform('');
        }
    }

    return (
        <div className='mb-8'>
            <label htmlFor='app and platforms' className='block text-sm font-medium text-gray-300'>App and Platforms (if any)</label>
            <input className='w-96 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={newAppAndPlatform}
                onChange={(e) => setNewAppAndPlatform(e.target.value)}
                name='appAndPlatforms'
            />
            <button onClick={handleAddAppAndPlatform} className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none ml-2' >Add App&Platform</button>
            <ul className='flex mt-2'>
                {projectData.appAndPlatforms && projectData.appAndPlatforms.map((appAndPlatform, index) => (
                    <li key={index} className=' bg-dark-jet px-3 py-1 text-sm rounded mx-1 w-fit'>{appAndPlatform}</li>
                ))}
            </ul>
        </div>
    )
}
