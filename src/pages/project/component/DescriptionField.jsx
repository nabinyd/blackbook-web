import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style.css';

export default function DescriptionField({
    projectData,
    setProjectData
}) {
    return (
        <div>
            <label htmlFor='text' className='block text-sm font-medium text-gray-300'>Project Description <sup>*</sup></label>
            <div className='w-10/12 px-3 h-72 py-2 my-2 text-sm text-white bg-dark-jet rounded-md focus:outline-none  '>

                <ReactQuill
                    value={projectData.description}
                    onChange={(value) => setProjectData({ ...projectData, description: value })}
                    theme='snow'
                    placeholder='Describe your project here... min 200 characters'
                    className='h-fit overflow-hidden text-white'
                />
            </div>
        </div>
    )
}
