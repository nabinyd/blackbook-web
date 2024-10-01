import React, { useState, useContext, useEffect } from 'react';
import { initialProjectData } from '../../Constant.js';
import { DatastoreServiceContext } from '../../context/DatastoreServiceContext.jsx';
import showToast from '../../utils/ShowToast.js';
import { UserserviceContext } from '../../context/UserServiceContext.jsx';
import Loader from '../../utils/Loader.jsx';
import EmailField from './component/EmailField.jsx';
import CollegeField from './component/CollegeField.jsx';
import TitleField from './component/TitleField.jsx';
import DescriptionField from './component/DescriptionField.jsx';
import ProjectTypeField from './component/ProjectTypeField.jsx';
import CategoryField from './component/CategoryField.jsx';
import StreamField from './component/StreamField.jsx';
import TagsField from './component/TagsField.jsx';
import ComponentField from './component/ComponentField.jsx';
import AppsAndPlatformField from './component/AppsAndPlatformField.jsx';
import ProjectImageField from './component/ProjectImageField.jsx';
import ProjectPdfField from './component/ProjectPdfField.jsx';
import BlackbookPdfField from './component/BlackbookPdfField.jsx';
import ProjectUrlField from './component/ProjectUrlField.jsx';
import CollaboratorField from './component/CollaboratorField.jsx';
import SubmitButton from './component/SubmitButton.jsx';
import AuthorNameField from './component/AuthorNameField.jsx';
import { ProjectServiceContext } from '../../context/ProjectServiceContext.jsx';

export default function CreateProject() {
    const { isUserLoggedIn } = useContext(UserserviceContext);
    const { isCreatingProject, createProject } = useContext(ProjectServiceContext);
    const { datastore, fetchCategoryList, fetchTagList, fetchProjectType, loading, error } = useContext(DatastoreServiceContext);
    // console.log(datastore);

    const [projectData, setProjectData] = useState(initialProjectData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

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

        if (projectData.description.length < 200) {
            showToast('Description should be atleast 50 characters', 2000, 'error');
            return;

        }

        if (projectData.tags.length === 0) {
            showToast('Please select atleast one tag', 2000, 'error');
            return;
        }
        if (projectData.components.length === 0) {
            showToast('Please add atleast one component', 2000, 'error');
            return;
        }

        if (projectData.projectType === '') {
            showToast('Please select project type', 2000, 'error');
            return;
        }

        if (projectData.category === '') {
            showToast('Please select category', 2000, 'error');
            return;
        }

        if (projectData.stream === '') {
            showToast('Please select stream', 2000, 'error');
            return;
        }

        if (projectData.projectUrl !== '') {
            if (!projectData.projectUrl.includes('https://') && !projectData.projectUrl.includes('http://')) {
                showToast('Please enter valid project url', 2000, 'error');
                return;
            }
        }



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

        createProject(formData);
    }


    useEffect(() => {
        fetchCategoryList();
        fetchTagList();
        fetchProjectType();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <h1>{error}</h1>;
    }


    return (
        <div className='flex flex-col  w-4/6 mx-auto mt-2 border border-gray-700 rounded-xl p-2'>
            {isUserLoggedIn ? null : <h1 className='text-center bg-red-950 p-1 text-sm  w-full mb-2'>Please Login to create project</h1>}
            <h1 className='text-center text-3xl font-semibold mb-10'>Create Project</h1>
            <form onSubmit={handleSubmit} encType='multipart/form-data' className=' mx-auto text-white w-4/5'>
                {/* Author Name */}
                <AuthorNameField projectData={projectData} handleInputChange={handleInputChange} />

                {/* Email */}
                <EmailField projectData={projectData} handleInputChange={handleInputChange} />

                {/* college */}
                <CollegeField projectData={projectData} handleInputChange={handleInputChange} />

                {/* Project title */}
                <TitleField projectData={projectData} handleInputChange={handleInputChange} />

                {/* Project Description */}
                <DescriptionField projectData={projectData} setProjectData={setProjectData} />


                {/* Dropdown for project type */}
                <ProjectTypeField projectData={projectData} handleInputChange={handleInputChange} datastore={datastore} />


                {/* Category */}
                <CategoryField projectData={projectData} handleInputChange={handleInputChange} datastore={datastore} />

                {/* Stream */}
                <StreamField projectData={projectData} handleInputChange={handleInputChange} datastore={datastore} />

                {/* Tags */}
                <TagsField projectData={projectData} setProjectData={setProjectData} datastore={datastore} />

                {/* Components and tools used */}
                <ComponentField projectData={projectData} setProjectData={setProjectData} />

                {/* App and platforms */}
                <AppsAndPlatformField projectData={projectData} setProjectData={setProjectData} />

                {/* Project Image */}
                <ProjectImageField projectData={projectData} setProjectData={setProjectData} />

                {/* Do you have project PDF */}
                <ProjectPdfField projectData={projectData} setProjectData={setProjectData} />


                {/* Is final year project */}
                <BlackbookPdfField projectData={projectData} setProjectData={setProjectData} />

                {/* Project url */}
                <ProjectUrlField projectData={projectData} handleInputChange={handleInputChange} />

                {/* for collaborator */}
                <CollaboratorField projectData={projectData} setProjectData={setProjectData} />

                <SubmitButton isCreatingProject={isCreatingProject} />
            </form >
        </div >
    )
}
