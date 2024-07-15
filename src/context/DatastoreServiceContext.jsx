import React, { createContext, useState, useEffect } from "react";
import DatastoreService from "../service/Datastore_service.js";

const DatastoreServiceContext = createContext();


const DatastoreServiceContextProvider = ({ children }) => {

    const initialDatastore = {
        categorylist: {},
        taglist: [],
        projectlevel: [],
        projectStatus: [],
        projectType: [],
    }
    const [datastore, setDatastore] = useState(initialDatastore);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const datastoreService = new DatastoreService();

    const fetchCategoryList = async () => {
        try {
            const response = await datastoreService.getCategories();
            console.log(response);
            if (response.statusCode === 200) {
                setDatastore((prevDatastore) => ({
                    ...prevDatastore,
                    categorylist: response.data[0],
                }));
                setLoading(false);
                setError(null);
            } else {
                setLoading(false);
                setError(response.message);
            }
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }

    const fetchProjectLevels = async () => {
        try {
            const response = await datastoreService.getProjectLevels();
            console.log(response);
            if (response.statusCode === 200) {
                setDatastore((prevDatastore) => ({
                    ...prevDatastore,
                    projectlevel: response.data[0],
                }));
                setLoading(false);
                setError(null);
            } else {
                setLoading(false);
                setError(response.message);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setError(error);
            setLoading(false);
        }
    }

    const fetchProjectStatus = async () => {
        try {
            const response = await datastoreService.getProjectStatus();
            console.log(response);
            if (response.statusCode === 200) {
                setDatastore((prevDatastore) => ({
                    ...prevDatastore,
                    projectStatus: response.data[0],
                }));
                setLoading(false);
                setError(null);
            } else {
                setLoading(false);
                setError(response.message);
            }
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }

    const fetchProjectType = async () => {
        try {
            const response = await datastoreService.getProjectTypes();
            console.log(response);
            if (response.statusCode === 200) {
                setDatastore((prevDatastore) => ({
                    ...prevDatastore,
                    projectType: response.data[0],
                }));
                setLoading(false);
                setError(null);
            } else {
                setLoading(false);
                setError(response.message);
            }
        } catch (error) {
            console.error(error);
            setError(error);
            setLoading(false);
        }
    }



    const fetchTagList = async () => {
        try {
            const response = await datastoreService.getTags();
            console.log(response);
            if (response.statusCode === 200) {
                setDatastore((prevDatastore) => ({
                    ...prevDatastore,
                    taglist: response.data[0],
                }));
                setLoading(false);
                setError(null);
            } else {
                setLoading(false);
                setError(response.message);
            }
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }

    console.log(datastore.categorylist);
    console.log(datastore.taglist);
    console.log(datastore.projectlevel);
    console.log(datastore.projectStatus);
    console.log(datastore.projectType);

    useEffect(() => {
        fetchCategoryList();
        fetchTagList();
        fetchProjectLevels();
        fetchProjectStatus();
        fetchProjectType();
    }, [])



    return (
        <DatastoreServiceContext.Provider value={{ datastore, fetchCategoryList }}>
            {children}
        </DatastoreServiceContext.Provider>
    )
}

export { DatastoreServiceContext, DatastoreServiceContextProvider }