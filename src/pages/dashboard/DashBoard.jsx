// Create a dashboard page ui

import React, { useContext, useEffect } from 'react';
import ProjectCard from '../project/ProjectCard.jsx';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';
import { ProjectServiceContext } from '../../context/ProjectServiceContext.jsx';
import Loader from '../../utils/Loader.jsx';

function DashBoard() {

    const { userData, isUserLoggedIn } = useContext(UserserviceContext);
    const { fullName } = userData;

    const { myProjects, fetchUserProjects, totalViews, fetchTotalViews, fetchTopRating, topRating, fetchMostViewedProjects, mostViewedProjects, favouritesProject, fetchFavouritesProjects, loading
    } = useContext(ProjectServiceContext);

    useEffect(() => {
        console.log(isUserLoggedIn);
        fetchUserProjects();
        fetchTotalViews();
        fetchTopRating();
        fetchMostViewedProjects();
    }, [])


    useEffect(() => {
        fetchFavouritesProjects();
    }, [userData])



    if (loading) {
        return <Loader />
    }



    return (
        <div className=''>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-3xl mb-5'>Welcome {fullName}</h1>
                </div>

            </div>
            <div className='grid grid-cols-4 gap-5'>
                <div className='h-32 bg-[#171717] mt-5 rounded-lg p-3'>
                    <h5 className='text-slate-400'>Number of Projects</h5>
                    <h1 className='text-blue-500 mt-5 text-2xl'>{myProjects.length}</h1>
                </div>
                <div className='h-32   bg-[#171717] mt-5 rounded-lg p-3'>
                    <h5 className='text-slate-400'>Total project views</h5>
                    <h1 className='text-blue-500 mt-5 text-2xl'>{totalViews.isNotEmpty ? totalViews : 0}</h1>
                </div>
                <div className='h-32  bg-[#171717] mt-5 rounded-lg p-3'>
                    <h5 className='text-slate-400'>Top rating</h5>
                    <h1 className='text-blue-500 mt-5 text-2xl'>{topRating.isNotEmpty ? topRating : 0}</h1>
                </div>
                <div className='h-32  bg-[#171717] mt-5 rounded-lg p-3'>
                    <h5 className='text-slate-400'>Total favourite</h5>
                    <h1 className='text-blue-500 mt-5 text-2xl'>{favouritesProject.length != null ? favouritesProject.length : 0}</h1>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='h-fit w-fit  bg-[#171717] mt-5 rounded-lg p-5'>
                    <h5 className='text-slate-400 mb-5'>Most viewed projects</h5>
                    <div className='flex flex-col gap-4'>
                        {/* if mostviewed project is empty then show no project */}


                        {mostViewedProjects.length === 0 && (
                            <div className='flex items-center h-52 w-52 justify-center'>
                                <h1 >No project Found.</h1>
                            </div>
                        )}


                        {mostViewedProjects.
                            map((project, index) => {
                                return (
                                    <ProjectCard key={index} project={project} />
                                )
                            })
                        }
                    </div>
                </div>
                {/* 
                 <div className='h-fit w-96 bg-[#171717] mt-5 rounded-lg p-5'>
                    <h5 className='text-slate-400 mb-5'>Recent comments</h5>
                    <div className='flex flex-col gap-4'>
                        <div className='h-fit w-full bg-[#121212] rounded-lg p-3'>
                            <h5 className='text-slate-400'>Name</h5>
                            <p className='text-white text-sm'>Comment</p>
                        </div>
                        <div className='h-fit w-full bg-[#121212] rounded-lg p-3'>
                            <h5 className='text-slate-400'>Name</h5>
                            <p className='text-white text-sm'>Comment</p>
                        </div>
                        <div className='h-fit w-full bg-[#121212] rounded-lg p-3'>
                            <h5 className='text-slate-400'>Name</h5>
                            <p className='text-white text-sm'>Comment</p>
                        </div>
                    </div>
                </div>
                */ }


            </div>
        </div>
    )
}

export default DashBoard;