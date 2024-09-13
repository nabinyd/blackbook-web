import React, { useContext, useEffect } from 'react'
import ProjectCard from '../project/ProjectCard.jsx'
import { ProjectServiceContext } from '../../context/ProjectServiceContext.jsx';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';
import Loader from '../../utils/Loader.jsx';

export default function MyProjects() {

    const { userData, isUserLoggedIn } = useContext(UserserviceContext);


    const { fetchUserProjects, myProjects, loading , favouritesProject, fetchFavouritesProjects} = useContext(ProjectServiceContext);

    useEffect(() => {
        fetchUserProjects();
    }, [])
    
    useEffect(() => {
        console.log(favouritesProject);
        fetchFavouritesProjects();
    }, [userData])



    if (loading) {
        return <Loader />
    }


    return (

        <div className=''>
            <div className='flex justify-between pr-11 mb-9'>
                <h1 className='text-2xl font-semibold'>My Projects</h1>
                <h6>Total projects: {myProjects.length}</h6>
            </div>
            <div className='grid grid-cols-3 gap-9'>
                {myProjects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                }
                )}
            </div>
        </div>
    )
}
