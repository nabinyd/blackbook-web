// Create a dashboard page ui

import React from 'react';
import Blackbooklogo from '../../svgexport-62.png';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard.jsx';

function DashBoard() {
    return (
        <div className=''>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-3xl mb-5'>Welcome Nabin Yadav</h1>
                </div>
                <div className='h-12 w-fit flex items-center'>
                    <div className='p-3'>
                        <h6>Nabin yadav</h6>
                        <p className='text-gray-400'>nabin_yd_</p>
                    </div>
                    <div className='h-8 w-8 border rounded-full '></div>
                </div>
            </div>
            <div className='flex justify-between '>
                <div className='h-32 w-72 bg-[#171717] mt-5 rounded-lg p-3'>
                    <h5 className='text-slate-400'>Number of Projects</h5>
                    <h1 className='text-blue-500 mt-5 text-2xl'>500+</h1>
                </div>
                <div className='h-32 w-72  bg-[#171717] mt-5 rounded-lg p-3'>
                    <h5 className='text-slate-400'>Total views</h5>
                    <h1 className='text-blue-500 mt-5 text-2xl'>500+</h1>
                </div>
                <div className='h-32 w-72 bg-[#171717] mt-5 rounded-lg p-3'>
                    <h5 className='text-slate-400'>Top rating</h5>
                    <h1 className='text-blue-500 mt-5 text-2xl'>500+</h1>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='h-fit w-fit  bg-[#171717] mt-5 rounded-lg p-5'>
                    <h5 className='text-slate-400 mb-5'>Most viewed projects</h5>
                    <ProjectCard />
                </div>
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

            </div>
        </div>
    )
}

export default DashBoard;