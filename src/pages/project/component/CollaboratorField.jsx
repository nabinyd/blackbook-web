import React, { useState } from 'react'

export default function CollaboratorField({
    projectData,
    setProjectData,
}) {
    const [newCollaborator, setNewCollaborator] = useState('');

    const handleAddCollaborator = (e) => {
        e.preventDefault();
        if (newCollaborator) {
            setProjectData((prevData) => ({
                ...prevData,
                collaborators: [...prevData.collaborators, newCollaborator],
            }));
            setNewCollaborator('');
        }
    }
    return (
        <div className='mb-8'>
            <label htmlFor='collaborator' className='block text-sm font-medium text-gray-300'>Collaborator</label>
            <input className='w-96 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={newCollaborator}
                onChange={(e) => setNewCollaborator(e.target.value)}
                name='collaborator'
                type='text'
            />
            <button onClick={handleAddCollaborator} className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none ml-2' >Add Collaborator</button>
            <ul className='flex mt-2'>
                {projectData.collaborators && projectData.collaborators.map((collaborator, index) => (
                    <li key={index} className=' bg-dark-jet px-3 py-1 text-sm rounded mx-1 w-fit'>{collaborator}</li>
                ))}
            </ul>
        </div>
    )
}
