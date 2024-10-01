import React, { useEffect, useState } from 'react'


export default function ProjectPdfField({
    projectData,
    setProjectData,
}) {
    const [hasProjectPdf, setHasProjectPdf] = useState(false);

    const handleProjectPdfFileChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        if (file && file.type === 'application/pdf') {
            setProjectData({
                ...projectData,
                projectPdf: Array.from(e.target.files),
            })
        } else {
            setProjectData({
                ...projectData,
                projectPdf: '',
            })
        }
    }

    useEffect(() => {
        if (!hasProjectPdf) {
            setProjectData({
                ...projectData,
                projectPdf: '',
            })
        }
    }, [hasProjectPdf])



    return (
        <div className='mb-5 border border-gray-700 rounded-md p-1 py-3'>
            <label htmlFor='hasProjectPdf' className=' text-gray-300'>
                Do you have project PDF?
            </label>
            <input type='checkbox' className='ml-2 bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={hasProjectPdf}
                onChange={(e) => setHasProjectPdf(e.target.checked)}
                name='isFinalYearProject'
            />
            {hasProjectPdf && (
                <div className=' mt-1'>
                    <label htmlFor='project pdf' className='block text-sm font-medium text-gray-300'>Project PDF</label>
                    <input type='file' accept='.pdf' className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        onChange={handleProjectPdfFileChange}
                        name='projectPdf'
                    />
                </div>
            )
            }
        </div>
    )
}
