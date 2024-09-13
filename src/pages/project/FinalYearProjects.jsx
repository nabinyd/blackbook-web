import React, { useContext, useEffect } from 'react'
import { ProjectServiceContext } from '../../context/ProjectServiceContext'
import Loader from '../../utils/Loader';
import ProjectCard from './ProjectCard';
import { UserserviceContext } from '../../context/UserServiceContext';

export default function FinalYearProjects() {

    const { finalYearProjects, fetchfinalYearProjects, fetchFavouritesProjects, loading, error } = useContext(ProjectServiceContext);
    const { userData, isUserLoggedIn } = useContext(UserserviceContext);


    useEffect(() => {
        fetchfinalYearProjects();
    }, [])

    useEffect(() => {
        if (isUserLoggedIn) {
            fetchFavouritesProjects();
        }
    }, [userData, isUserLoggedIn])

    if (error) {
        return (
            <div className='flex items-center h-screen-75 justify-center'>
                <h1 >No Project Found</h1>
            </div>
        )
    }

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <div className=' mx-auto w-fit sm:w-4/5'>
                <div className=' sm:grid md:grid-cols-3 sm:grid-cols-2'>
                    {finalYearProjects.map((project) => {
                        console.log(project.id);
                        return <ProjectCard key={project.id} project={project} />
                    })}
                </div>
            </div>
        </>
    )
}
