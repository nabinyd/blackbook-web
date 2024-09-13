import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ProjectServiceContext } from '../../context/ProjectServiceContext';
import { UserserviceContext } from '../../context/UserServiceContext';
import StarRating from '../../utils/StarRating';
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import showToast from '../../utils/ShowToast';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({ project }) {
    const { addtoFavourites, favouritesProject, updateViews, deleteProject } = useContext(ProjectServiceContext);
    const { isUserLoggedIn, fetchUserData } = useContext(UserserviceContext);


    const [isFavourite, setIsFavourite] = useState(false);
    const [isProfilePage, setIsProfilePage] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

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

    function copyToClipboard() {
        navigator.clipboard.writeText(`${window.location.href}/description/${project.id}`);
        console.log(project.id);
        showToast('Link copied to clipboard', 2500, 'success');
    }

    console.log(project);
    const rating = project.averageRating;

    console.log(location.pathname);

    const handleMenu = () => {
        console.log('menu clicked');
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        if (location.pathname === '/profile') {
            setIsProfilePage(true);
        } else {
            setIsProfilePage(false);
        }
    }, [])



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
            <div className='header flex items-center justify-between px-1 pb-2'>
                <div className='flex'>
                    <div className='Avatar h-9 w-9 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center'>{project.authorName.charAt(0).toUpperCase()}
                    </div>
                    <div className='px-3'>
                        <h5 className='text-sm'>{project.authorName}</h5>
                        <h1 className='text-slate-400 text-xs'>
                            {convertTimestampToDate(project.createdAt)}
                        </h1>
                        {/* <p  className='text-sm'>{project.id}</p>  */}
                    </div>
                </div>
                <div >
                    {isProfilePage && (
                        <div className='p-1 relative'>
                            <FontAwesomeIcon
                                icon={faEllipsisVertical}
                                className='text-gray-400 cursor-pointer'
                                onClick={handleMenu}
                            />
                            {isMenuOpen && (
                                <div className='absolute top-1 ml-4 bg-[#222222] rounded-md p-2 border border-gray-500'>
                                    <p className='text-sm text-gray-400 cursor-pointer mb-2' onClick={() => deleteProject(project.id)}>Delete</p>
                                    <p className='text-sm text-gray-400 cursor-pointer '>Edit</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Link to={`/description/${project.id}`} onClick={() => updateViews(project.id)}  >
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
            <div className='flex items-center justify-between w-full mt-1  p-1 text-sm'>
                <div className='flex gap-1 pl-2 items-center' onClick={() => copyToClipboard()}>
                    <FontAwesomeIcon icon={faShareSquare} className='' />
                    <p className='cursor-pointer'>Share</p>
                </div>
                <div className='flex gap-1 pr-2 items-center' onClick={handleFavourite}>
                    <FontAwesomeIcon icon={faHeart} className={isFavourite ? 'text-red-500 cursor-pointer' : 'text-gray-400 cursor-pointer'} onClick={handleFavourite} />
                    <p className='cursor-pointer'>{isFavourite ? "Unfavourite" : "favourite"}</p>
                </div>

            </div>

        </div>
    )
}

export default ProjectCard