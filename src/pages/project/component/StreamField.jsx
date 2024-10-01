import React from 'react'
import SelectStreamWidget from '../SelectStreamWidget.jsx'

export default function StreamField({
    projectData,
    handleInputChange,
    datastore
}) {
    return (
        <div className='mb-8'>
            <label htmlFor='stream' className='block text-sm font-medium text-gray-300'>Stream <sup>*</sup></label>
            {SelectStreamWidget(projectData, handleInputChange, datastore)}
        </div>
    )
}
