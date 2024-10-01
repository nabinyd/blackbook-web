import React from 'react'
import SearchBar from '../SearchBar.jsx'

export default function TagsField({
    projectData,
    setProjectData,
    datastore
}) {
    return (
        <div className='mb-8'>
            <label htmlFor='tags' className='block text-sm font-medium text-gray-300'>Tags <sup>*</sup></label>
            <SearchBar data={datastore.taglist} setProjectData={setProjectData} projectData={projectData} />
        </div>
    )
}
