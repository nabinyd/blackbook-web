import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

function ProjectCard() {
    return (
        <Link to="/description" >
            <div className='bg-[#181818]  rounded-md w-72 px-2 py-3 border border-slate-800 z-10'>
                <div className='header flex items-center justify-between px-1 pb-2'>
                    <div className='flex'>
                        <div className='Avatar h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center'>A</div>
                        <div className='px-3'>
                            <h5 className='text-sm'>AuthorName</h5>
                            <h1 className='text-zinc-500 text-xs'>2024-07-01</h1>
                        </div>
                    </div>
                    <div>
                        <h6 className='text-green-400 text-xs'>Easy</h6>
                    </div>
                </div>
                <div className=''>
                    <img src="https://media.istockphoto.com/id/1511226415/photo/unlock-potential-of-business-success-stairs-dart-and-dartboard-targets-magnifying-glass-with.jpg?s=2048x2048&w=is&k=20&c=-wwoVVQJcW1nAyzLeGRtitwIemEQpWyKWwuITnS81kA=" alt="card" className='h-36 w-svw' />
                </div>
                <div className='py-3'>
                    <h1 className='text-base font-open-sans text-justify mb-1'>A smal hydropower projects</h1>
                    <p className='text-xs text-slate-400 text-justify text-ellipsis line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam delectus fugiat earum tempora eligendi similique, beatae, nam, exercitationem assumenda totam magni quasi! Sunt officia aperiam vitae id dicta eum iste!</p>
                </div>
                <div className='flex items-end  text-slate-200 justify-between'>
                    <div>
                        <p className='py-2 text-sm'>Category: engineering</p>
                        <div className='h-5 border w-fit rounded-2xl px-2 flex items-center justify-center'>
                            <p className='text-xs'>Frontend</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-sm'>Rating: 3.6</p>
                        <ReactStars
                            count={5}
                            size={15}
                            activeColor="#ffd700"
                            value={4}
                            isHalf={false}
                            // emptyIcon={<i className="far fa-star"></i>}
                            // halfIcon={<i className="fa fa-star-half-alt"></i>}
                            // filledIcon={<i className="fa fa-star"></i>} 
                            edit={false}
                        />
                    </div>
                </div>
            </div>
        </ Link>

    )
}

export default ProjectCard