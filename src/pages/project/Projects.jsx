
import React, { useEffect, useContext } from 'react'
import ProjectCard from './ProjectCard.jsx';
import { ProjectServiceContext } from '../../context/ProjectServiceContext.jsx';
import Loader from '../../utils/Loader.jsx';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';

function Projects() {
    const { fetchAllProjects, projectData, loading, favouritesProject, fetchFavouritesProjects, error } = useContext(ProjectServiceContext);
    const { userData, isUserLoggedIn, fetchUserData, validateToken } = useContext(UserserviceContext);

    useEffect(() => {
        fetchAllProjects();
        console.log(error);
    }, [])

    useEffect(() => {
        if (isUserLoggedIn) {
            fetchFavouritesProjects();
        }
    }, [userData])


    if (error) {
        return (
            <div className='flex items-center h-screen-75 justify-center'>
                <h1 >{error}</h1>
            </div>
        )
    }

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <div className='bg-background-color  mx-auto py-9 px-6'>
                <div className=' grid grid-cols-4'>
                    {projectData.map((project) => {
                        return <ProjectCard key={project.id} project={project} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Projects