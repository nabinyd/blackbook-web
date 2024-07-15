import React, { createContext, useState, useEffect, useContext } from "react";
import ProjectService from "../service/Project_service.js";
import ProjectModel from "../model/ProjectModel.js";
import { UserserviceContext } from "./UserServiceContext.jsx";
import showToast from "../utils/ShowToast.js";
import Tags from "../TagList.js";
import { streams } from "../CategoryList.js";
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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);



    const { userData, isUserLoggedIn, fetchUserData } = useContext(UserserviceContext);
    const projectService = new ProjectService();
    console.log(Tags);
    console.log(streams);


    const uploadFile = async (file) => {
        try {
            const response = await projectService.uploadImages(file);
            console.log(response);
            if (response.statusCode === 200) {
                
                showToast(response.message, 3000);
            }
        } catch (error) {
            setError(error);
        }
    }

    const additemToList = async ({ listType, itemList }) => {
        try {
            const response = await projectService.addItemToList({ listType, itemList });
            console.log(response);
            if (response.statusCode === 200) {
                showToast(response.message, 3000);
            }
        } catch (error) {
            setError(error);
        }
    }

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


    const addmorefield = async (field) => {
        try {
            const response = await projectService.addMoreFields(field);
            console.log(response);
            if (response.statusCode === 200) {
                showToast(response.message, 3000);
            }
        } catch (error) {
            setError(error);
            console.log(error);
        }
    }


    const fetchProjectDescription = async (id) => {
        try {
            const response = await projectService.fetchProjectById(id);
            console.log(response);
            if (response.statusCode === 200) {
                setDescriptionProjectData(response.data);
                setLoading(false);
            } else {
                setError(response.message);
            }
        } catch (error) {
            setError(error);
        }
    }

    const addtoFavourites = async (id) => {
        try {
            console.log(isUserLoggedIn);
            if (isUserLoggedIn) {
                console.log("id", id);
                const response = await projectService.addToFavourites(id);
                console.log(response);
                console.log(favouritesProject);

                if (response.statusCode === 200) {
                    if (response.message === 'Project added to favourites') {
                        showToast('Project added to favourites', 3000);
                        return "Project added to favourites"
                    } else if (response.message === 'Project removed from favourites') {
                        showToast('Project removed from favourites', 3000);
                        return "Project removed from favourites"
                    }
                    fetchUserData();
                }
                fetchFavouritesProjects();
            } else {
                console.log('user not logged in');
                // show toast for 2 seconds
                showToast('Please login to add to favourites', 3000);

            }
        } catch (error) {
            showToast(error, 3000);
            setError(error);
        }
    }

    const fetchfinalYearProjects = async () => {
        try {
            const response = await projectService.getFinalYearProjects();
            console.log(response);
            if (response.statusCode === 200) {
                const projects = response.data.map((project) => new ProjectModel(project));
                setFinalYearProjects(projects);
                setLoading(false);
            } else {
                setError(response.message);
            }
        } catch (error) {
            setError(error);
        }
    }



    const fetchMostViewedProjects = async () => {
        try {
            if (!isUserLoggedIn) {
                return;
            }
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
        }
    }

    const fetchAllProjects = async () => {
        try {
            const response = await projectService.fetchAllProjects();
            console.log(response.data);
            if (response.statusCode === 200) {
                const projects = response.data.map((project) => new ProjectModel(project));
                console.log(projects);
                setProjectData(projects);
                setLoading(false);
            } else {
                setError(response.message);
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
        }
    }


    const createProject = async (project) => {
        try {
            const response = await projectService.createProject(project);
            console.log(response);
            // if (response.statusCode === 201) {
            //     fetchAllProjects();
            // }
        } catch (error) {
            setError(error);
        }
    }

    const fetchTotalViews = async () => {
        try {
            const response = await projectService.getTotalUsersProjectViews();
            console.log(response);
            if (response.statusCode === 200) {
                setTotalViews(response.data);
            }
        } catch (error) {
            setError(error);

        }
    }

    const fetchTopRating = async () => {
        try {
            const response = await projectService.getTopRatingProjects();
            console.log(response);
            if (response.statusCode === 200) {
                setTopRating(response.data);
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
            updateViews,
        }}>
            {children}
        </ProjectServiceContext.Provider>
    )
}

export { ProjectServiceContext, ProjectServiceContextProvider }