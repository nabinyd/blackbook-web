import React from 'react'

export default function SelectStreamWidget(projectData, handleInputChange, datastore) {
    if (projectData.category === 'Education') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.Education.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else if (projectData.category === 'Medical') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.Medical.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else if (projectData.category === 'architecture') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.architecture.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else if (projectData.category === 'business') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.business.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else if (projectData.category === 'Law') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.Law.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else if (projectData.category === 'Health') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.Health.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else if (projectData.category === 'SocialScienceFields') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet  '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.SocialScienceFields.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else if (projectData.category === 'science') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.science.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else if (projectData.category === 'Agricultural') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.Agricultural.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else if (projectData.category === 'arts') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.arts.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else if (projectData.category === 'Humanities') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.Humanities.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else if (projectData.category === 'Engineering') {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet  '
                value={projectData.stream}
                name='stream'
                onChange={handleInputChange}>
                {datastore.categorylist.Engineering.sort().map((stream, index) => (
                    <option key={index} value={stream}>{stream}</option>
                ))}
            </select>
        )
    } else {
        return (
            <select className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '>
                <option value=''>Select Stream</option>
            </select>
        )
    }
}
