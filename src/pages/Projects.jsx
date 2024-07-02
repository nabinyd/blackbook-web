
import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <>
            <div className='bg-background-color py-9 px-6'>
                <div className='mx-auto w-fit grid grid-cols-4 gap-12 '>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </>
    )
}

export default Projects