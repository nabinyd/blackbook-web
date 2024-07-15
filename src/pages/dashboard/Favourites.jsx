import React, { useContext, useEffect } from 'react';
import ProjectCard from '../project/ProjectCard.jsx';
import { ProjectServiceContext } from '../../context/ProjectServiceContext.jsx';
import Loader from '../../utils/Loader.jsx';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';

export default function Favourites() {
    const { fetchFavouritesProjects, favouritesProject, loading, } = useContext(ProjectServiceContext);

    const { userData, isUserLoggedIn, fetchUserData } = useContext(UserserviceContext);


    useEffect(() => {
        fetchFavouritesProjects();
        console.log(favouritesProject.length);
    }, [userData, isUserLoggedIn])

    if (loading) {
        return <Loader />
    } else if (favouritesProject.length === 0) {
        return <h1>No favourites projects</h1>
    }

    return (
        <div className=''>
            <div className='flex justify-between pr-11 mb-9'>
                <h1 className='text-2xl font-semibold'>Favourites</h1>
                <h6>Total projects: {favouritesProject.length}</h6>
            </div>
            <div className='grid grid-cols-3 gap-9'>
                {favouritesProject.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                }
                )}
            </div>

        </div>
    )
}
