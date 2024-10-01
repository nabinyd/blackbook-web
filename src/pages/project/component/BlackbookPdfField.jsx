import React, { useState, useEffect } from 'react'


export default function BlackbookPdfField({
    projectData,
    setProjectData

}) {

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setProjectData({
            ...projectData,
            [name]: checked,
        });
    };


    const handlePdfFileChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        if (file && file.type === 'application/pdf') {
            setProjectData({
                ...projectData,
                pdfUrl: Array.from(e.target.files),
            })
        } else {
            setProjectData({
                ...projectData,
                pdfUrl: '',
            })
        }
    }

    useEffect(() => {
        if (!projectData.isFinalYearProject) {
            setProjectData({
                ...projectData,
                pdfUrl: '',
            })

        }
    }, [projectData.isFinalYearProject])


    return (
        <div className='mb-5 border border-gray-800 p-1 py-3 rounded-md'>
            <label htmlFor='isFinalYearProject' className=' text-gray-300'>Is final year project? </label>
            <input type='checkbox' className='ml-2 bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.isFinalYearProject}
                onChange={handleCheckboxChange}
                name='isFinalYearProject'
            />
            {/* upload pdf */}
            {projectData.isFinalYearProject && (
                <div className=' mt-1'>
                    <label htmlFor='project pdf' className='block text-sm font-medium text-gray-300'>Blackbook Pdf</label>
                    <input type='file' accept='.pdf' className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        onChange={handlePdfFileChange}
                        name='pdfUrl'
                        required
                    />
                </div>
            )}
        </div>
    )
}
