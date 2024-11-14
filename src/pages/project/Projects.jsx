
import React, { useEffect, useContext } from 'react'
import ProjectCard from './ProjectCard.jsx';
import { ProjectServiceContext } from '../../context/ProjectServiceContext.jsx';
import Loader from '../../utils/Loader.jsx';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';

function Projects() {
    const { userData, isUserLoggedIn } = useContext(UserserviceContext);
    const { fetchAllProjects, projectData, loading, fetchFavouritesProjects, error } = useContext(ProjectServiceContext);
    console.log(isUserLoggedIn);
    console.log(userData);

    useEffect(() => {
        fetchAllProjects();
    }, [])

    useEffect(() => {
        if (isUserLoggedIn) {
            fetchFavouritesProjects();
        }
    }, [userData])


    if (error) {
        return (
            <div className='flex items-center h-screen-75 justify-center'>
                <h1 >No project Found.</h1>
            </div>
        )
    }

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <div className='mx-auto w-fit md:w-4/5'>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 w-full mx-auto'>
                    {projectData.map((project) => {
                        console.log(project);
                        return <ProjectCard key={project.id} project={project} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Projects