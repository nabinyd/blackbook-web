import React, { useState, useContext, useEffect } from 'react';
import { initialProjectData } from '../../Constant.js';
import { ProjectServiceContext } from '../../context/ProjectServiceContext.jsx';
import { DatastoreServiceContext } from '../../context/DatastoreServiceContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import showToast from '../../utils/ShowToast.js';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';
import Loader from '../../utils/Loader.jsx';
import SearchBar from './SearchBar.jsx';
import SelectStreamWidget from './SelectStreamWidget.jsx';

export default function CreateProject() {
    const { isUserLoggedIn } = useContext(UserserviceContext);
    const { createProject, isCreatingProject } = useContext(ProjectServiceContext);
    const { datastore, fetchCategoryList, fetchProjectStatus, fetchTagList, fetchProjectType, loading } = useContext(DatastoreServiceContext);
    console.log(datastore);

    const [projectData, setProjectData] = useState(initialProjectData);
    const [newTag, setNewTag] = useState('');
    const [newCollaborator, setNewCollaborator] = useState('');
    const [previewImage, setPreviewImage] = useState([]);
    const [projectPdfUrl, setProjectPdfUrl] = useState('');
    const [hasProjectPdf, setHasProjectPdf] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');
    const [newComponent, setNewComponent] = useState('');
    const [newAppAndPlatform, setNewAppAndPlatform] = useState('');
    const [urlToFileMap, setUrlToFileMap] = useState(new Map());



    const handleImageFileChange = (e) => {
        if (e.target.files) {
            const fileList = e.target.files;
            const filesArray = Array.from(fileList);
            const newUrls = filesArray.map((file) => URL.createObjectURL(file));

            // Update preview images
            setPreviewImage((prevImages) => prevImages.concat(newUrls));

            // Update URL to File mapping
            const newUrlToFileMap = new Map(urlToFileMap);
            newUrls.forEach((url, index) => {
                newUrlToFileMap.set(url, filesArray[index]);
            });
            setUrlToFileMap(newUrlToFileMap);

            // Update project data
            setProjectData((prevData) => ({
                ...prevData,
                imagesUrl: [...prevData.imagesUrl, ...filesArray],
            }));

            // Clear input value
            e.target.value = '';
        }
    };

    const deleteImage = (url) => {
        // Remove image from previewImage state
        const filteredImages = previewImage.filter((image) => image !== url);
        setPreviewImage(filteredImages);

        // Remove image from projectData.imagesUrl
        const fileToRemove = urlToFileMap.get(url);
        const filteredImagesUrl = projectData.imagesUrl.filter((file) => file !== fileToRemove);

        // Update project data
        setProjectData((prevData) => ({
            ...prevData,
            imagesUrl: filteredImagesUrl,
        }));
        // Remove from URL to File mapping
        const newUrlToFileMap = new Map(urlToFileMap);
        newUrlToFileMap.delete(url);
        setUrlToFileMap(newUrlToFileMap);

        // Free memory for the removed image URL
        URL.revokeObjectURL(url);
    };

    const renderPhotos = (source) => {
        return source.map((photo) => {
            console.log(photo);
            return <div className='flex'>
                <img src={photo} alt='previeww' key={photo} height={"300px"} className='p-3 h-52 w-64' />
                <FontAwesomeIcon
                    icon={faDeleteLeft}
                    onClick={() => deleteImage(photo)} className='h-4 w-8' />
            </div>
        });
    };

    const handlePdfFileChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setProjectData({
            ...projectData,
            pdfUrl: Array.from(e.target.files),
        });
        if (file && file.type === 'application/pdf') {
            const file = URL.createObjectURL(e.target.files[0]);
            setPdfUrl(file);
        } else {
            URL.revokeObjectURL(pdfUrl);
            setPdfUrl('');
        }
    }



    const handleProjectPdfFileChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setProjectData({
            ...projectData,
            projectPdf: Array.from(e.target.files),
        });
        if (file && file.type === 'application/pdf') {
            const file = URL.createObjectURL(e.target.files[0]);
            setProjectPdfUrl(file);
        } else {
            URL.revokeObjectURL(projectPdfUrl);
            setProjectPdfUrl('');
        }
    }

    console.log(projectData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setProjectData({
            ...projectData,
            [name]: checked,
        });
    };

    // const handleAddTag = (e) => {
    //     e.preventDefault();
    //     setProjectData({
    //         ...projectData,
    //         tags: [...projectData.tags, newTag],
    //     });
    //     setNewTag('');
    // }

    const handleAddCollaborator = (e) => {
        e.preventDefault();
        setProjectData({
            ...projectData,
            collaborators: [...projectData.collaborators, newCollaborator],
        });
        setNewCollaborator('');
    }


    const handleAddComponent = (e) => {
        e.preventDefault();
        setProjectData({
            ...projectData,
            components: [...projectData.components, newComponent],
        });
        setNewComponent('');
    }

    const handleAddAppAndPlatform = (e) => {
        e.preventDefault();
        setProjectData({
            ...projectData,
            appAndPlatforms: [...projectData.appAndPlatforms, newAppAndPlatform],
        });
        setNewAppAndPlatform('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(projectData);

        if (!isUserLoggedIn) {
            showToast("Please login to create project", 2000, 'error');
            return;
        }
        const formData = new FormData();


        for (let key in projectData) {
            if (key !== 'imagesUrl' || key !== 'pdfUrl' || key !== 'tags' || key !== 'components' || key !== 'appAndPlatforms' || key !== 'collaborators') {
                formData.append(key, projectData[key]);
            }
        }
        console.log(formData);
        // append tags
        for (let i = 0; i < projectData.tags.length; i++) {
            formData.append('tags', projectData.tags[i]);
        }

        // append components
        for (let i = 0; i < projectData.components.length; i++) {
            formData.append('components', projectData.components[i]);
        }

        // append app and platforms
        for (let i = 0; i < projectData.appAndPlatforms.length; i++) {
            formData.append('appAndPlatforms', projectData.appAndPlatforms[i]);
        }

        // append collaborators
        for (let i = 0; i < projectData.collaborators.length; i++) {
            formData.append('collaborators', projectData.collaborators[i]);
        }

        // append files

        if (projectData.imagesUrl.length === 0) {
            showToast('Please select atleast one image', 2000, 'error');
            return;
        }

        if (projectData.imagesUrl.length > 5) {
            showToast('You can select maximum 5 images', 2000, 'error');
            return;
        }

        for (let i = 0; i < projectData.imagesUrl.length; i++) {
            formData.append('imagesUrl', projectData.imagesUrl[i]);
        }

        for (let i = 0; i < projectData.pdfUrl.length; i++) {
            formData.append('pdfUrl', projectData.pdfUrl[i]);
        }
        console.log(formData);
        createProject(formData);
    }

    // create function to makelist from category object of keys
    function makeList() {
        let list = [];
        for (let key in datastore.categorylist) {
            list.push(key);
        }
        return list;
    }


    console.log(projectData);

    useEffect(() => {
        return () => {
            // Cleanup function to revoke the object URL
            if (projectPdfUrl) {
                URL.revokeObjectURL(projectPdfUrl);
            }
        };
    }, [projectPdfUrl]);

    useEffect(() => {
        return () => {
            // Cleanup function to revoke the object URL
            if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
            }
        };
    }, [pdfUrl]);


    // useEffect that if the hasParojectPdf is false then set the projectPdfUrl to empty string

    useEffect(() => {
        if (!hasProjectPdf) {
            setProjectPdfUrl('');
            setProjectData({
                ...projectData,
                projectPdf: '',
            });
        }
    }, [hasProjectPdf]);

    useEffect(() => {
        if (!projectData.isFinalYearProject) {
            setProjectData({
                ...projectData,
                projectPdf: '',
            });
        }
    }, [projectData.isFinalYearProject]);

    useEffect(() => {
        fetchCategoryList();
        fetchTagList();
        fetchProjectStatus();
        fetchProjectType();
    }, []);

    if (loading) {
        return <Loader />;
    }


    return (
        <div className='flex flex-col  w-4/6 mx-auto mt-2 border border-gray-700 rounded-xl p-2'>
            {isUserLoggedIn ? null : <h1 className='text-center bg-red-950 p-1 text-sm  w-full mb-2'>Please Login to create project</h1>}
            <h1 className='text-center text-3xl font-semibold mb-10'>Create Project</h1>
            <form onSubmit={handleSubmit} encType='multipart/form-data' className=' mx-auto text-white w-4/5'>
                {/* Author Name */}
                <div className='mb-8'>
                    <label htmlFor='authorname' className='block text-sm font-medium text-gray-300'>Author Name</label>
                    <div className='flex items-center gap-x-5'>
                        <input className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                            type='text'
                            name='authorName'
                            value={projectData.authorName}
                            onChange={handleInputChange}
                            required
                        />
                        {/* <p className=''>{projectData.authorName}</p> */}
                    </div>
                </div>

                {/* Email */}
                <div className='mb-8'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-300'>Email</label>
                    <input className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        type='email'
                        name='email'
                        value={projectData.email}
                        onChange={handleInputChange}
                        required
                    />
                    {/* <p>{projectData.email}</p> */}
                </div>
                {/* college */}

                <div className='mb-8'>
                    <label htmlFor='college' className='block text-sm font-medium text-gray-300'>College</label>
                    <input className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet   '
                        type='text'
                        value={projectData.college}
                        onChange={handleInputChange}
                        name='college'

                    />
                </div>

                {/* Project title */}
                <div className='mb-8'>
                    <label htmlFor='Ptoject title' className='block text-sm font-medium text-gray-300'>Project Title</label>

                    <input type='text' className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet  '
                        value={projectData.title}
                        onChange={handleInputChange}
                        name='title'
                        required
                    />
                    {/* <p>
                        {projectData.title}
                    </p> */}
                </div>

                {/* Project Description */}
                <div className='mb-8'>
                    <label htmlFor='text' className='block text-sm font-medium text-gray-300'>Project Description</label>

                    <textarea className='w-10/12 px-3 h-56 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        value={projectData.description}
                        onChange={handleInputChange}
                        name='description'
                        required
                    >
                    </textarea>
                </div>


                {/* dropdown for project status */}
                <div className='mb-8'>
                    <label htmlFor='project status' className='block text-sm font-medium text-gray-300'>Project Status</label>
                    <select id="project status" className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet  '
                        value={projectData.projectStatus}
                        name='projectStatus'
                        onChange={handleInputChange}
                        required
                    >
                        {datastore.projectStatus.map((status, index) => (
                            <option key={index} value={status}>{status}</option>
                        ))}
                    </select>
                </div>

                {/* Dropdown for project type */}
                <div className='mb-8'>
                    <label htmlFor='project type' className='block text-sm font-medium text-gray-300'>Project Type</label>
                    <select id="project type" className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        value={projectData.projectType}
                        name='projectType'
                        required
                        onChange={handleInputChange}>
                        {datastore.projectType.sort().map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                    {/* <h1>{projectData.projectType}</h1> */}
                </div>


                {/* Category */}
                <div className='mb-8'>
                    <label htmlFor='category' className='block text-sm font-medium text-gray-300'>Category</label>
                    <select id="category" className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        value={projectData.category}
                        name='category'
                        required
                        onChange={handleInputChange}>
                        {makeList().sort().map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                {/* Stream */}
                <div className='mb-8'>
                    <label htmlFor='stream' className='block text-sm font-medium text-gray-300'>Stream</label>
                    {/* {selectStream()} */}
                    {SelectStreamWidget(projectData, handleInputChange, datastore)}
                </div>

                {/* Tags */}
                <div className='mb-8'>
                    <label htmlFor='tags' className='block text-sm font-medium text-gray-300'>Tags</label>
                    <SearchBar data={datastore.taglist} setProjectData={setProjectData} projectData={projectData} />
                </div>

                {/* Components and tools used */}
                <div className='mb-8'>
                    <label htmlFor='components' className='block text-sm font-medium text-gray-300'>Components</label>
                    <input className='w-96 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        type='text'
                        name='components'
                        value={newComponent}
                        onChange={(e) => setNewComponent(e.target.value)}
                    />
                    <button onClick={handleAddComponent} className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none ml-2 w-fit' >Add Component</button>
                    <ul className='flex mt-2'>
                        {projectData.components && projectData.components.map((component, index) => (
                            <li key={index} className=' bg-dark-jet px-3 py-1 text-sm rounded mx-1 w-fit'>{component}</li>
                        ))}
                    </ul>
                </div>
                {/* App and platforms */}
                <div className='mb-8'>
                    <label htmlFor='app and platforms' className='block text-sm font-medium text-gray-300'>App and Platforms</label>
                    <input className='w-96 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        value={newAppAndPlatform}
                        onChange={(e) => setNewAppAndPlatform(e.target.value)}
                        name='appAndPlatforms'
                    />
                    <button onClick={handleAddAppAndPlatform} className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none ml-2' >Add App&Platform</button>
                    <ul className='flex mt-2'>
                        {projectData.appAndPlatforms && projectData.appAndPlatforms.map((appAndPlatform, index) => (
                            <li key={index} className=' bg-dark-jet px-3 py-1 text-sm rounded mx-1 w-fit'>{appAndPlatform}</li>
                        ))}
                    </ul>
                </div>

                {/* Project Image */}
                <div className='mb-10 border border-gray-800 rounded-md p-1 py-3'>
                    <div>
                        <label htmlFor='project image' className='block text-sm font-medium text-gray-300'>Project Image</label>
                        <input type='file' multiple accept='.jpg,.jpeg,.png' className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                            name='imagesUrl'
                            onChange={handleImageFileChange}
                            
                        // value={projectData.imagesUrl}
                        />
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        {/* <h2 key={previewImage}>{previewImage.length} selected</h2> */}
                        <h2>{projectData.imagesUrl.length} item selected</h2>
                    </div>
                    <div className='preview gap-1  '>
                        {renderPhotos(previewImage)}
                    </div>
                </div>



                {/* Do you have project PDF */}
                <div className='mb-5 border border-gray-700 rounded-md p-1 py-3'>
                    <label htmlFor='hasProjectPdf' className=' text-gray-300'>
                        Do you have project PDF?
                    </label>
                    <input type='checkbox' className='ml-2 bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        value={hasProjectPdf}
                        onChange={(e) => setHasProjectPdf(e.target.checked)}
                        name='isFinalYearProject'
                    />
                    {hasProjectPdf && (
                        <div className=' mt-1'>
                            <label htmlFor='project pdf' className='block text-sm font-medium text-gray-300'>Project PDF</label>
                            <input type='file' accept='.pdf' className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                                onChange={handleProjectPdfFileChange}
                                name='projectPdf'
                            />
                            <h2>{hasProjectPdf ? projectPdfUrl : null}</h2>
                        </div>
                    )
                    }
                </div>


                {/* Is final year project */}
                <div className='mb-5 border border-gray-800 p-1 py-3 rounded-md'>
                    <label htmlFor='isFinalYearProject' className=' text-gray-300'>Is final year project? </label>
                    <input type='checkbox' className='ml-2 bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        value={projectData.isFinalYearProject}
                        onChange={handleCheckboxChange}
                        name='isFinalYearProject'
                    />
                    {/* upload pdf */}
                    {projectData.isFinalYearProject && (
                        <div className=' mt-1'>
                            <label htmlFor='project pdf' className='block text-sm font-medium text-gray-300'>Blackbook Pdf</label>
                            <input type='file' accept='.pdf' className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                                onChange={handlePdfFileChange}
                                name='pdfUrl'
                                required
                            />
                        </div>
                    )}
                </div>

                <div className='flex gap-x-2 items-center'>
                    <h2>{projectData.isFinalYearProject ? pdfUrl : null}</h2>
                </div>

                {/* Project url */}
                <div className='mb-8'>
                    <label htmlFor='project url' className='block text-sm font-medium text-gray-300'>Project URL</label>
                    <input className='w-10/12 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        value={projectData.projectUrl}
                        onChange={handleInputChange}
                        name='projectUrl'
                        type='text'
                    />

                </div>

                {/* for collaborator */}

                <div className='mb-8'>
                    <label htmlFor='collaborator' className='block text-sm font-medium text-gray-300'>Collaborator</label>
                    <input className='w-96 px-3 py-2 mt-1 text-sm text-white bg-dark-jet rounded-md focus:outline-none focus:bg-jet '
                        value={newCollaborator}
                        onChange={(e) => setNewCollaborator(e.target.value)}
                        name='collaborator'
                        type='text'
                    />
                    <button onClick={handleAddCollaborator} className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none ml-2' >Add Collaborator</button>
                    <ul className='flex mt-2'>
                        {projectData.collaborators && projectData.collaborators.map((collaborator, index) => (
                            <li key={index} className=' bg-dark-jet px-3 py-1 text-sm rounded mx-1 w-fit'>{collaborator}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex justify-center'>
                    {isCreatingProject ? <Loader /> : <button type='submit' className='w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none' >Create Project</button>}
                </div>
            </form >
        </div >
    )
}
