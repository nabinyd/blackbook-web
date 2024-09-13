import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ProjectServiceContext } from '../../context/ProjectServiceContext';
import Loader from '../../utils/Loader';
import StarRating from '../../utils/StarRating.jsx';
import LastSeen from '../../utils/LastSeen.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FeedbackContext } from '../../context/FeedbackContext.jsx';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import PdfVIewer from '../../utils/PdfVIewer.jsx';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';
import { faNutritionix } from '@fortawesome/free-brands-svg-icons';


export default function DescriptionPage() {
    const { id } = useParams();
    console.log(id);

    const { isUserLoggedIn } = useContext(UserserviceContext);
    console.log(isUserLoggedIn);

    const { fetchProjectDescription, descriptionProjectData, loading, addtoFavourites, descriptionLoading, descriptionError } = useContext(ProjectServiceContext);

    const { feedbacks, setFeedbacks, addFeedback, fetchFeedback, projectFeedbacks, feedbackLoading } = useContext(FeedbackContext);

    function handleCommentChange(e) {
        e.preventDefault();
        setFeedbacks({ ...feedbacks, comments: e.target.value });
    }

    useEffect(() => {
        fetchProjectDescription(id);
        fetchFeedback(id);
    }, []);


    if (loading || descriptionLoading) {
        return <Loader />;
    }

    if (descriptionError) {
        return <h1 className='text-center text-white'>Error: {descriptionError}</h1>
    }

    function convertTimestampToDate(timestamp) {
        try {
            const milliseconds = timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;
            const date = new Date(milliseconds);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        } catch (error) {
            console.log(error);
        }
    }

    const handleFavourite = () => {
        addtoFavourites(id);
    };

    if (!descriptionProjectData || !descriptionProjectData.imagesUrl || descriptionProjectData.imagesUrl.length === 0) {
        return <Loader />;
    }

    let title = descriptionProjectData.title.split(" ");
    // make the first letter of each word capital seprated by space
    title = title.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    const feedbackLength = projectFeedbacks.length;

    return (
        <div className=' w-8/12 mx-auto text-start p-5'>
            <div>
                <div className='my-3'>
                    {/* <h1>id: {descriptionProjectData.id}</h1> */}
                    <h1 className='text-3xl font-medium font-lato'>{title}</h1>
                    {/* <p>{descriptionProjectData.projectStatus}</p> */}
                </div>
                <div className='flex text-lg text-gray-400 gap-3 items-center justify-start'>
                    <h2 className=''>  By - {descriptionProjectData.authorName}</h2>
                    <p> Created at: {convertTimestampToDate(descriptionProjectData.createdAt)}</p>
                    <p>  Last updated: {convertTimestampToDate(descriptionProjectData.updatedAt)}</p>
                    {descriptionProjectData.isFinalYearProject && <p> Final Year Project</p>}
                    <p className=''> Views: {descriptionProjectData.viewCount}</p>
                </div>

                <div className="w-full h-[0.1px] bg-gray-900 mt-5"></div>
                <div className='flex justify-between  my-10 z-20'>
                    <div className='border rounded-md border-gray-600 p-2 text-lg text-gray-100 w-72 text-wrap'>
                        <h4>Type:  <span className='text-gray-400'>{descriptionProjectData.projectType}</span></h4>
                        <p>Category:  <span className='text-gray-400'>{descriptionProjectData.category}</span></p>
                        <p>Stream:  <span className='text-gray-400'>{descriptionProjectData.stream}</span></p>
                        <p>College:  <span className='text-gray-400'>{descriptionProjectData.college}</span></p>
                    </div>
                    <div className='flex gap-4 mt-2'>
                        {descriptionProjectData.isFinalYearProject && <Link to={descriptionProjectData.pdfUrl} target='_blank' className='text-white'
                        >
                            <div className=' p-3 bg-slate-800 w-fit flex items-center'>
                                <h6 >View PDF</h6>
                            </div>
                        </Link>}
                        {/* <a href={descriptionProjectData.pdfUrl} target='_blank'>view pdf</a> */}
                        <Link>
                            <div className=' p-3 bg-slate-800 w-fit flex items-center' onClick={() => handleFavourite()}>
                                <h4>Favourite</h4>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='mt-10'>
                    <h4 className='text-lg font-semibold '>Description:</h4>
                    <p className='text-gray-300 p-2'>{descriptionProjectData.description}</p>
                </div>

                <div className='flex items-center justify-center'>
                    <div className='h-96 w-80 my-10 overflow-hidden bg-contain '>
                        {descriptionProjectData && descriptionProjectData.imagesUrl.slice(1).map((image) => {
                            return <img key={image} src={image} alt='project-image' className='' />
                        })}
                    </div>
                </div>
                <div className="w-full h-[0.1px] bg-gray-800 mt-5"></div>
                {/* Components */}
                <div className='my-14'>
                    <h4 className='text-lg font-semibold'>Components and tools used:</h4>
                    {(!descriptionProjectData || !descriptionProjectData.components || descriptionProjectData.components.length === 0) && (
                        <div>No components available</div>
                    )}
                    {descriptionProjectData && descriptionProjectData.components.map((component) => {
                        return <div className='px-2 py-1 w-fit  m-2 flex items-start rounded-lg text-gray-300 bg-neutral-900 ' key={component}>
                            <h1>{component}</h1>
                        </div>
                    })}
                </div>

                {/* apps and platform */}
                <div className='my-14'>
                    <h4 className='text-lg font-semibold'>Apps and platforms used:</h4>
                    {descriptionProjectData && descriptionProjectData.appAndPlatforms.map((apps) => {
                        return <div className='px-2 py-1 w-fit  m-2 flex items-start rounded-lg text-gray-300 bg-neutral-900 ' key={apps}>
                            <h1>{apps}</h1>
                        </div>
                    })}
                </div>

                <div className='my-14'>
                    <h4 className='text-lg font-semibold'>Tags:</h4>
                    {descriptionProjectData && descriptionProjectData.tags.map((tag) => {
                        return <div className='px-2 py-1 w-fit  m-2 flex items-start rounded-lg text-gray-300 bg-neutral-900 ' key={tag}>
                            <h1>{tag}</h1>
                        </div>
                    })}
                </div>
                <div>
                    <h4 className='text-lg font-semibold'>Contributors:</h4>
                    <div className='flex gap-4 flex-col py-3'>
                        {descriptionProjectData && descriptionProjectData.collaborators.map((contributor) => {
                            return <div className='flex items-center gap-2' key={contributor}>
                                <div className='Avatar h-9 w-9 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center '>{contributor.charAt(0).toUpperCase()}
                                </div>
                                <h1>{contributor}</h1>
                            </div>
                        })}
                    </div>
                </div>
                <h4 className='text-lg font-semibold'>Project Images:</h4>
                <div className='flex overflow-x-auto h-96 w-full'>
                    {descriptionProjectData && descriptionProjectData.imagesUrl.map((image) => {
                        return <img key={image} src={image} alt='project-image' className='p-4' width={'500px'} />
                    })}
                </div>

            </div>
            <div className="w-full h-[0.1px] bg-gray-800 mt-5"></div>
            <div className="comments my-12">
                <div>
                    <h4 className='text-lg font-semibold'>Rate this project:</h4>
                    <div className='my-2'>
                        <StarRating isDisplayOnly={false} />
                    </div>
                </div>
                <div className=' flex flex-col'>
                    <textarea
                        value={feedbacks.comments}
                        onChange={handleCommentChange}
                        className='w-full h-20 bg-jet px-3 py-1.5 rounded-lg text-gray-300'
                        placeholder='Write your comment here'>
                    </textarea>
                    <button
                        type='submit'
                        className='bg-blue-600 hover:bg-blue-700 text-white text-sm p-1  my-1 h-9 w-44 mt-4 rounded-sm'
                        onClick={() => addFeedback(id)}
                    >
                        Submit
                    </button>
                </div>
                <div className="w-full h-[0.1px] bg-gray-800 mt-5"></div>
                <div className='mt-6'>
                    <div className='flex items-center'>
                        <FontAwesomeIcon
                            icon={faComment}
                            className='text-blue-600'
                            size='lg'
                        />
                        <p className='text-lg font-semibold px-3'>Comments:  {feedbackLength} </p>
                    </div>
                </div>
                <div >
                    {feedbackLength === 0 && <p className='text-center'>No comments yet</p>}
                    {feedbackLoading ? <Loader /> : projectFeedbacks.map((comment) => {
                        return (
                            <div key={comment.id} className=' rounded-lg px-4 my-2 bg-neutral-900 flex justify-between items-center'>
                                <div className='p-2 flex items-center'>
                                    <div className='Avatar h-9 w-9 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center '>{comment.authorName.charAt(0).toUpperCase()}
                                    </div>
                                    <div className='px-2'>
                                        <div className='flex text-sm items-center justify-center gap-3'>
                                            <h4 className='font-medium text-[15px]'>{comment.authorName}   </h4>
                                            {/* <span className='px-2'>&#183;</span> */}
                                            <span className='text-gray-400'>
                                                <LastSeen date={convertTimestampToDate(comment.createdAt)} />
                                            </span>
                                        </div>
                                        <p className='text-sm py-1'>{comment.comment}</p>
                                    </div>
                                </div>
                                <div className='w-fit'>
                                    <StarRating showRating={comment.rating} isDisplayOnly={true} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
