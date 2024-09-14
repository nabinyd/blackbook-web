import React, { createContext, useState, useEffect } from "react";
import DatastoreService from "../service/Datastore_service.js";
const DatastoreServiceContext = createContext();


const DatastoreServiceContextProvider = ({ children }) => {

    const initialDatastore = {
        categorylist: {},
        taglist: [],
        projectStatus: [],
        projectType: [],
    }
    const [datastore, setDatastore] = useState(initialDatastore);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const datastoreService = new DatastoreService();

    const addMoreFields = async (fieldname) => {
        try {
            setLoading(true);
            const response = await datastoreService.addMoreFields(fieldname);
            console.log(response);
            if (response.statusCode === 200) {
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

    const additemtoList = async ({ listType, itemList }) => {
        try {
            setLoading(true);
            const response = await datastoreService.addItemToList({ listType, itemList });
            console.log(response);
            if (response.statusCode === 200) {
                console.log(response);
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



    const fetchCategoryList = async () => {
        try {
            setLoading(true);
            const response = await datastoreService.getCategories();
            console.log(response);
            if (response.statusCode === 200) {
                setDatastore((prevDatastore) => ({
                    ...prevDatastore,
                    categorylist: response.data[0],
                }));
                setLoading(false);
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


    const fetchProjectStatus = async () => {
        try {
            setLoading(true);
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
            setLoading(false);
        }
    }

    const fetchProjectType = async () => {
        try {
            setLoading(true);
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
            setLoading(true);
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
            setLoading(false);
        }
    }

    console.log(datastore.categorylist);
    console.log(datastore.taglist);
    console.log(datastore.projectStatus);
    console.log(datastore.projectType);


    // This useEffect is for adding the initial data to the database storelist collection
    // This will be used only once to add the initial data to the database
    // This will be commented out after the initial data is added to the database
    // NOTE: This is not a good practice to add data to the database like this
    // This is just for the sake of adding the initial data to the database
    // NOTE: Do not use this code in production
    // NOTE: Leave this code COMMENTED OUT

    // useEffect(async () => {
    // await additemtoList({listType: "tagList", itemList: Tags});
    // await additemtoList({listType: "projectStatus", itemList: ProjectStatus});
    // await additemtoList({listType: "projectType", itemList: ProjectType});
    // await addMoreFields(streams);
    // }, [])



    return (
        <DatastoreServiceContext.Provider value={{ datastore, fetchCategoryList, fetchCategoryList,  fetchTagList, fetchProjectStatus, fetchProjectType, loading, }}>
            {children}
        </DatastoreServiceContext.Provider>
    )
}

export { DatastoreServiceContext, DatastoreServiceContextProvider }