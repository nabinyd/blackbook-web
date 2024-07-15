import React, { useState, useContext } from 'react';
import SearchBar from './SearchBar.jsx';
import { initialProjectData } from '../../Constant.js';
import { ProjectServiceContext } from '../../context/ProjectServiceContext.jsx';
import ProjectService from '../../service/Project_service.js';
import { DatastoreServiceContext } from '../../context/DatastoreServiceContext.jsx';

export default function CreateProject() {
    const { createProject } = useContext(ProjectServiceContext);
    const { datastore } = useContext(DatastoreServiceContext);
    console.log(datastore);

    const [projectData, setProjectData] = useState(initialProjectData);
    const [newTag, setNewTag] = useState('');
    const [newCollaborator, setNewCollaborator] = useState('');
    const [imagesUrl, setImagesUrl] = useState([]);
    const [pdfUrl, setPdfUrl] = useState('');
    const [newComponent, setNewComponent] = useState('');
    const [newAppAndPlatform, setNewAppAndPlatform] = useState('');


    const handleImageFileChange = (e) => {
        setImagesUrl(e.target.files);

    }

    const handlePdfFileChange = (e) => {
        setPdfUrl(e.target.files[0]);
    }



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

    const handleAddTag = (e) => {
        e.preventDefault();
        setProjectData({
            ...projectData,
            tags: [...projectData.tags, newTag],
        });
        setNewTag('');
    }

    const handleAddCollaborator = (e) => {
        e.preventDefault();
        setProjectData({
            ...projectData,
            collaborators: [...projectData.collaborators, newCollaborator],
        });
        setNewCollaborator('');
    }

    const handleAddImageUrl = (e) => {
        e.preventDefault();
        setProjectData({
            ...projectData,
            imagesUrl: [...projectData.imagesUrl, imagesUrl],
        });
        setImagesUrl([]);
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
        const formData = new FormData();

        for (let key in projectData) {
            if (key !== 'imagesUrl' || key !== 'pdfUrl') {
                formData.append(key, projectData[key]);
            }
        }
        // append files
        for (let i = 0; i < imagesUrl.length; i++) {
            formData.append('imagesUrl', imagesUrl[i]);
        }

        formData.append('pdfUrl', pdfUrl);
        createProject(formData);
    }
    console.log(datastore.categorylist.Education);

    // create function to makelist from category object of keys

    function makeList() {
        let list = [];
        for (let key in datastore.categorylist) {
            list.push(key);
        }
        return list;
    }


    function selectStream() {
        if (projectData.category === 'Education') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.Education.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else if (projectData.category === 'Medical') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.Medical.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else if (projectData.category === 'architecture') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.architecture.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else if (projectData.category === 'business') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.business.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else if (projectData.category === 'Law') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.Law.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else if (projectData.category === 'Health') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.Health.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else if (projectData.category === 'SocialScienceFields') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.SocialScienceFields.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else if (projectData.category === 'science') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.science.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else if (projectData.category === 'Agricultural') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.Agricultural.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else if (projectData.category === 'arts') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.arts.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else if (projectData.category === 'Humanities') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.Humanities.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else if (projectData.category === 'Engineering') {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                    value={projectData.stream}
                    name='stream'
                    onChange={handleInputChange}>
                    {datastore.categorylist.Engineering.sort().map((stream, index) => (
                        <option key={index} value={stream}>{stream}</option>
                    ))}
                </select>
            )
        } else {
            return (
                <select className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '>
                    <option value=''>Select Stream</option>
                </select>
            )
        }
    }

    return (
        <div className='flex flex-col w-8/12 mx-auto'>
            <h1>Create Project</h1>
            <form onSubmit={handleSubmit} encType='multipart/form-data' className='w-2/4 mt-10 mx-auto'>
                {/* Author Name */}
                <div className='mb-4'>
                    <label htmlFor='authorname' className='block text-sm font-medium text-gray-500'>Author Name</label>
                    <input className='w-full px-3 py-2 mt-1 text-sm text-white border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        type='text'
                        name='authorName'
                        value={projectData.authorName}
                        onChange={handleInputChange}
                    />
                    <p>{projectData.authorName}</p>
                </div>
                {/* Email */}
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-500'>Email</label>
                    <input className='w-full px-3 py-2 mt-1 text-sm text-white border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        type='email'
                        name='email'
                        value={projectData.email}
                        onChange={handleInputChange}
                    />
                    <p>{projectData.email}</p>
                </div>
                {/* college */}

                <div className='mb-4'>
                    <label htmlFor='college' className='block text-sm font-medium text-gray-500'>College</label>
                    <input className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        type='text'
                        value={projectData.college}
                        onChange={handleInputChange}
                        name='college'
                    />
                </div>

                {/* Project title */}
                <div className='mb-4'>
                    <label htmlFor='Ptoject title' className='block text-sm font-medium text-gray-500'>Project Title</label>

                    <input type='text' className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        value={projectData.title}
                        onChange={handleInputChange}
                        name='title'
                    />
                    <p>
                        {projectData.title}
                    </p>
                </div>

                {/* Project Description */}
                <div className='mb-4'>
                    <label htmlFor='text' className='block text-sm font-medium text-gray-500'>Project Description</label>

                    <textarea className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        value={projectData.description}
                        onChange={handleInputChange}
                        name='description'
                    ></textarea>
                </div>

                {/* Dropdown for project level easy medium hard */}
                <div className='mb-4'>
                    <label htmlFor='project level' className='block text-sm font-medium text-gray-500'>Project Level</label>
                    <select id="project level" className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        value={projectData.projectLevel}
                        name='projectLevel'
                        onChange={handleInputChange} >
                        {datastore.projectlevel.map((level, index) => (
                            <option key={index} value={level}>{level}</option>
                        ))}
                    </select>
                    <p>
                        {projectData.projectLevel}
                    </p>
                </div>

                {/* dropdown for project status */}

                <div className='mb-4'>
                    <label htmlFor='project status' className='block text-sm font-medium text-gray-500'>Project Status</label>
                    <select id="project status" className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        value={projectData.projectStatus}
                        name='projectStatus'
                        onChange={handleInputChange}>
                        {datastore.projectStatus.map((status, index) => (
                            <option key={index} value={status}>{status}</option>
                        ))}
                    </select>
                </div>

                {/* Dropdown for project type */}
                <div className='mb-4'>
                    <label htmlFor='project type' className='block text-sm font-medium text-gray-500'>Project Type</label>
                    <select id="project type" className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        value={projectData.projectType}
                        name='projectType'
                        onChange={handleInputChange}>
                        {datastore.projectType.sort().map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <h1>{projectData.projectType}</h1>


                {/* Category */}
                <div className='mb-4'>
                    <label htmlFor='category' className='block text-sm font-medium text-gray-500'>Category</label>
                    <select id="category" className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        value={projectData.category}
                        name='category'
                        onChange={handleInputChange}>
                        {makeList().sort().map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                {/* Stream */}
                <div className='mb-4'>
                    <label htmlFor='stream' className='block text-sm font-medium text-gray-500'>Stream</label>
                    {selectStream()}
                </div>
                {/* Tags */}
                <div className='mb-4'>
                    <label htmlFor='tags' className='block text-sm font-medium text-gray-500'>Tags</label>
                    <SearchBar data={datastore.taglist} />
                    {/* <input type='text' className='w-2/4 px-3 py-2 mt-1 text-sm text-black border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                    />
                    <button onClick={handleAddTag} className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none ml-2' >Add Tag</button> */}
                </div>
                <ul>
                    {projectData.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>

                {/* Components and tools used */}
                <div className='mb-4'>
                    <label htmlFor='components' className='block text-sm font-medium text-gray-500'>Components</label>

                    <input className='w-full px-3 py-2 mt-1 text-sm  border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        type='text'
                        name='components'
                        value={newComponent}
                        onChange={(e) => setNewComponent(e.target.value)}
                    />
                </div>
                <button onClick={handleAddComponent} className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none ml-2' >Add Component</button>


                <ul>
                    {projectData.components.map((component, index) => (
                        <li key={index}>{component}</li>
                    ))}
                </ul>
                {/* App and platforms */}
                <div className='mb-4'>
                    <label htmlFor='app and platforms' className='block text-sm font-medium text-gray-500'>App and Platforms</label>
                    <input className='w-full px-3 py-2 mt-1 text-sm border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '

                        value={newAppAndPlatform}
                        onChange={(e) => setNewAppAndPlatform(e.target.value)}
                        name='appAndPlatforms'
                    />


                    <button onClick={handleAddAppAndPlatform} className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none ml-2' >Add App and Platform</button>

                </div>
                <ul>
                    {projectData.appAndPlatforms.map((appAndPlatform, index) => (
                        <li key={index}>{appAndPlatform}</li>
                    ))}
                </ul>
                {/* Project Image */}
                <div className='mb-4'>
                    <label htmlFor='project image' className='block text-sm font-medium text-gray-500'>Project Image</label>
                    <input type='file' multiple accept='.jpg,.jpeg,.png' className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        name='imagesUrl'
                        onChange={handleImageFileChange}
                    />
                </div>
                <button onClick={handleAddImageUrl} className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none ml-2' >Add Image</button>

                <h1>
                    {projectData.imagesUrl}
                </h1>
                {/* Is final year project */}
                <div className='mb-4'>
                    <label htmlFor='isFinalYearProject' className=' text-gray-500'>Is final year project? </label>
                    <input type='checkbox' className='ml-2'
                        value={projectData.isFinalYearProject}
                        onChange={handleCheckboxChange}
                        name='isFinalYearProject'
                    />
                </div>

                {/* upload pdf */}
                <div className='mb-4'>
                    <label htmlFor='project pdf' className='block text-sm font-medium text-gray-500'>Project PDF</label>
                    <input type='file' accept='.pdf' className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        value={projectData.pdfUrl}
                        onChange={handlePdfFileChange}
                        name='pdfUrl'
                    />
                </div>
                <h1>
                    {projectData.pdfUrl}
                </h1>
                {/* Project url */}
                <div className='mb-4'>
                    <label htmlFor='project url' className='block text-sm font-medium text-gray-500'>Project URL</label>
                    <input className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        value={projectData.projectUrl}
                        onChange={handleInputChange}
                        name='projectUrl'
                        type='text'
                    />

                </div>

                {/* for collaborator */}

                <div className='mb-4'>
                    <label htmlFor='collaborator' className='block text-sm font-medium text-gray-500'>Collaborator</label>
                    <input className='w-full px-3 py-2 mt-1 text-sm text-black border border-gray-300 bg-dark-jet rounded-md shadow-sm focus:outline-none  '
                        value={newCollaborator}
                        onChange={(e) => setNewCollaborator(e.target.value)}
                        name='collaborator'
                        type='text'
                    />
                    <button onClick={handleAddCollaborator} className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none ml-2' >Add Collaborator</button>
                </div>
                <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-3 py-2 focus:outline-none mb-11' >Create Project</button>
            </form >
        </div >
    )
}
