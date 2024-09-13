import React, { createContext, useState, useEffect, useContext } from "react";
import ProjectService from "../service/Project_service.js";
import ProjectModel from "../model/ProjectModel.js";
import { UserserviceContext } from "./UserServiceContext.jsx";
import showToast from "../utils/ShowToast.js";


const ProjectServiceContext = createContext();




const ProjectServiceContextProvider = ({ children }) => {
    const [projectData, setProjectData] = useState([]);
    const [favouritesProject, setFavouritesProject] = useState([]);
    const [myProjects, setMyProjects] = useState([]);
    const [descriptionProjectData, setDescriptionProjectData] = useState([]);
    const [finalYearProjects, setFinalYearProjects] = useState([]);
    const [mostViewedProjects, setMostViewedProjects] = useState([]);
    const [totalViews, setTotalViews] = useState(0);
    const [topRating, setTopRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);
    const [descriptionLoading, setDescriptionLoading] = useState(true);
    const [descriptionError, setDescriptionError] = useState(null);
    const [isCreatingProject, setIsCreatingProject] = useState(false);



    const { userData, isUserLoggedIn, fetchUserData } = useContext(UserserviceContext);
    const projectService = new ProjectService();




    const updateViews = async (id) => {
        try {
            const response = await projectService.updateViewsCount(id);
            console.log(response);
            if (response.statusCode === 200) {
                console.log(response.message);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
            return;
        }
    }

    const fetchProjectDescription = async (id) => {
        try {
            setDescriptionLoading(true);
            const response = await projectService.fetchProjectById(id);
            console.log(response);
            if (response.statusCode === 200) {
                setDescriptionProjectData(response.data);
                setDescriptionLoading(false);
            } else {
                setDescriptionLoading(false);
                setDescriptionError(response.message);
            }
        } catch (error) {
            setDescriptionLoading(false);
            setDescriptionError(error);
        }
    }

    const addtoFavourites = async (id) => {
        try {
            console.log(isUserLoggedIn);
            if (isUserLoggedIn) {
                const response = await projectService.addToFavourites(id);
                if (response.statusCode === 200) {
                    if (response.message === 'Project added to favourites') {
                        showToast('Project added to favourites', 2000, "success");
                        return "Project added to favourites"
                    } else if (response.message === 'Project removed from favourites') {
                        showToast('Project removed from favourites', 2000);
                        return "Project removed from favourites"
                    }
                    fetchUserData();
                    fetchFavouritesProjects();
                }
            } else {
                console.log('user not logged in');
                showToast('Please login to add to favourites', 3000, "error");

            }
        } catch (error) {
            showToast(error, 3000, "error");
            setError(error);
        }
    }

    const fetchfinalYearProjects = async () => {
        try {
            setLoading(true);
            const response = await projectService.getFinalYearProjects();
            console.log(response);
            if (response.statusCode === 200) {
                const projects = response.data.map((project) => new ProjectModel(project));
                setFinalYearProjects(projects);
                setLoading(false);
            } else {
                setError(response.message);
                setLoading(false);
            }
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }



    const fetchMostViewedProjects = async () => {
        try {
            if (!isUserLoggedIn) {
                return;
            }
            setLoading(true);
            const response = await projectService.getMostViewedProjects();
            console.log(response);
            console.log(response.statusCode);
            console.log(response.data);
            if (response.statusCode === 200) {
                const projects = response.data.map((project) => new ProjectModel(project));
                setMostViewedProjects(projects);
                console.log(mostViewedProjects);
                setLoading(false);
            }
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const fetchAllProjects = async () => {
        try {
            setLoading(true);
            const response = await projectService.fetchAllProjects();
            console.log(response.data);
            if (response.statusCode === 200) {
                const projects = response.data.map((project) => new ProjectModel(project));
                console.log(projects);
                setProjectData(projects);
                setLoading(false);
            } else {
                setError(response.message);
                setLoading(false);
            }
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }


    const fetchFavouritesProjects = async () => {
        try {
            console.log(isUserLoggedIn);
            if (!isUserLoggedIn) {
                return;
            }
            const response = await projectService.fetchFavouritesProjects();
            console.log(response);
            console.log(response.statusCode);
            if (response.statusCode === 200) {
                const projects = response.data.map((project) => new ProjectModel(project));
                setFavouritesProject(projects);
                setLoading(false);
            }
        } catch (error) {
            setError(error);
        }
    }


    const fetchUserProjects = async () => {
        try {
            setLoading(true);
            console.log(isUserLoggedIn);
            if (!isUserLoggedIn) {
                return;
            }
            const response = await projectService.fetchUserProjects();
            console.log(response);
            if (response.statusCode === 200) {
                const projects = response.data.map((project) => new ProjectModel(project));
                setMyProjects(projects);
                setLoading(false);
            }
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }


    const createProject = async (project) => {
        try {

            if (!isUserLoggedIn) {
                showToast("Please login to create project", 2500, "error");
                return;
            }
            setIsCreatingProject(true);
            const response = await projectService.createProject(project);
            console.log(response);

            if (response.statusCode === 201) {
                showToast(response.message, 2500, "success");
                fetchAllProjects();
                setIsCreatingProject(false);
            } else if (response.statusCode === 401) {
                showToast(response.message, 2500, "error");
                setIsCreatingProject(false);
            } else {
                setError(response.message);
                showToast("Error creating project", 2500, "error");
                setIsCreatingProject(false);
            }

        } catch (error) {
            setError(error);
            setIsCreatingProject(false);
        }
    }
    console.log(totalViews);

    const fetchTotalViews = async () => {
        try {
            setLoading(true);
            const response = await projectService.getTotalUsersProjectViews();
            console.log(response);
            if (response.statusCode === 200) {
                if (response.data.totalViews === null) {
                    setTotalViews(0);
                    return;
                }
                setTotalViews(response.data);
                setLoading(false);
            }
        } catch (error) {
            setError(error);
            setLoading(false);

        }
    }

    const fetchTopRating = async () => {
        try {
            const response = await projectService.getTopRatingProjects();
            console.log(response);
            if (response.statusCode === 200) {
                setTopRating(response.data);
                setLoading(false);
            }
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const deleteProject = async (id) => {
        try {
            const response = await projectService.deleteProject(id);
            console.log(response);
            if (response.statusCode === 200) {
                fetchAllProjects();
                fetchUserData();
            }
        } catch (error) {
            setError(error);
        }
    }

    return (
        <ProjectServiceContext.Provider value={{
            fetchAllProjects,
            projectData,
            createProject,
            loading,
            fetchUserProjects,
            myProjects,
            fetchFavouritesProjects,
            favouritesProject,
            fetchTotalViews,
            totalViews,
            fetchTopRating,
            topRating,
            fetchMostViewedProjects,
            mostViewedProjects,
            addtoFavourites,
            fetchfinalYearProjects,
            finalYearProjects,
            error,
            fetchProjectDescription,
            descriptionProjectData,
            descriptionLoading,
            descriptionError,
            updateViews,
            deleteProject,
            isCreatingProject,
        }}>
            {children}
        </ProjectServiceContext.Provider>
    )
}

export { ProjectServiceContext, ProjectServiceContextProvider }