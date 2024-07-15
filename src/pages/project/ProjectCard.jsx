import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProjectServiceContext } from '../../context/ProjectServiceContext';
import { UserserviceContext } from '../../context/UserServiceContext';
import StarRating from '../../utils/StarRating';

function ProjectCard({ project }) {
    const { addtoFavourites, favouritesProject, updateViews } = useContext(ProjectServiceContext);
    const { isUserLoggedIn, userData, fetchUserData } = useContext(UserserviceContext);

    console.log(isUserLoggedIn);
    const [isFavourite, setIsFavourite] = useState(false);
    function convertTimestampToDate(timestamp) {
        const milliseconds = timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;
        const date = new Date(milliseconds);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const handleFavourite = () => {
        addtoFavourites(project.id);
        fetchUserData();
    }

    console.log(project.id);

    let averageRating = 1;
    if (project.feedbacks.length > 0) {
        const totalRating = project.feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0);
        averageRating = totalRating / project.feedbacks.length;
    }
    const rating = averageRating.toFixed(1);
    console.log(rating);


    useEffect(() => {
        if (!isUserLoggedIn) {
            setIsFavourite(false);
            return;
        }
        console.log(favouritesProject.map((project) => project.id));
        if (favouritesProject.map((project) => project.id).includes(project.id)) {
            setIsFavourite(true);
        } else {
            setIsFavourite(false);
        }

    })

    return (
        <div className='bg-[#222222]  rounded-md w-80 p-2 z-10 m-4'>
            <Link to={`/description/${project.id}`} onClick={() => updateViews(project.id)}  >
                <div className='header flex items-center justify-between px-1 pb-2'>
                    <div className='flex'>
                        <div className='Avatar h-9 w-9 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center'>{project.authorName.charAt(0).toUpperCase()}
                        </div>
                        <div className='px-3'>
                            <h5 className='text-sm'>{project.authorName}</h5>
                            <h1 className='text-slate-400 text-xs'>
                                {convertTimestampToDate(project.createdAt)}
                            </h1>
                            {/* <p  className='text-sm'>{project.id}</p> */}
                        </div>
                    </div>
                    <div>
                        <h6 className='text-green-400 text-xs'>{project.projectLevel}</h6>
                    </div>
                </div>
                <div className='bg-contain'>
                    <h1>{isUserLoggedIn}</h1>
                    <img src={project.imagesUrl} alt="card" className='h-44 w-svw py-1' />
                </div>
                <div className=''>
                    <h1 className='text-xl text-justify pb-1'>{project.title}</h1>
                    <p className='text-xs text-slate-400 text-justify text-ellipsis line-clamp-2'>{project.description}</p>
                </div>
                <div className='flex items-end justify-between'>
                    <div>
                        <p className='py-2 text-sm text-gray-200'>Category: {project.category}</p>
                        {project.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className='text-xs bg-[#2d2d2d] px-2 py-0.5 rounded-md mr-1'>{tag}</span>
                        ))}
                    </div>
                    <div>
                        {/* <p className='text-sm'>Rating: {rating}</p> */}
                        <StarRating showRating={rating} isDisplayOnly={true} />
                    </div>
                </div>
            </ Link>
            <div className="w-full h-[0.1px] bg-gray-700 mt-2"></div>
            <div className='flex justify-center mt-3'>
                <div className='flex gap-x-14 justify-stretch items-center'>
                    <p className=''>Share</p>
                    <div className='h-4 bg-white w-[0.5px]'></div>
                    <button onClick={() => handleFavourite()} className=''>
                        {isFavourite ? 'unfavourite' : 'favourite'}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard