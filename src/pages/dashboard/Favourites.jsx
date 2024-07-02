import React from 'react'
import ProjectCard from '../ProjectCard.jsx'

export default function Favourites() {
    return (

        <div className=''>
            <div className='flex justify-between pr-11 mb-9'>
                <h1 className='text-2xl font-semibold'>Favourites</h1>
                <h6>Total projects: 6</h6>
            </div>
            <div className='grid grid-cols-3 gap-9'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}
