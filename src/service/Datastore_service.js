import axios from 'axios';
import { DATASTORELIST_API } from '../Constant.js';
export default class DatastoreService {
    constructor() {
        this.addItemToList_api = `${DATASTORELIST_API}/additemtolist`;
        this.addmorefields_api = `${DATASTORELIST_API}/addmorefields`;
        this.getprojecttypes_api = `${DATASTORELIST_API}/getprojecttypelist`;
        this.getcategories_api = `${DATASTORELIST_API}/getcategorylist`;
        this.getprojectlevels_api = `${DATASTORELIST_API}/getprojectlevellist`;
        this.getprojectstatus_api = `${DATASTORELIST_API}/getprojectstatuslist`;
        this.gettags_api = `${DATASTORELIST_API}/gettaglist`;
    }

    async getTags() {
        try {
            const response = await axios.get(this.gettags_api);
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getProjectTypes() {
        try {
            const response = await axios.get(this.getprojecttypes_api);
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getCategories() {
        try {
            const response = await axios.get(this.getcategories_api);
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getProjectLevels() {
        try {
            const response = await axios.get(this.getprojectlevels_api);
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }


    async getProjectStatus() {
        try {
            const response = await axios.get(this.getprojectstatus_api);
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }





}
