import axios from 'axios';
import { DATASTORELIST_API } from '../Constant.js';
export default class DatastoreService {
    constructor() {
        this.addItemToList_api = `${DATASTORELIST_API}/additemtolist`;
        this.addmorefields_api = `${DATASTORELIST_API}/addmorefields`;
        this.getprojecttypes_api = `${DATASTORELIST_API}/getprojecttypelist`;
        this.getcategories_api = `${DATASTORELIST_API}/getcategorylist`;
        this.getprojectstatus_api = `${DATASTORELIST_API}/getprojectstatuslist`;
        this.gettags_api = `${DATASTORELIST_API}/gettaglist`;
    }

    async addMoreFields(fieldname) {
        try {
            const response = await axios.post(this.addmorefields_api, { fieldname }).then((response) => {
                console.log(response.message);
                return response.data;
            }).catch((error) => {
                console.error(error);
                return error;
            });

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;

        }
    }

    async addItemToList({ listType, itemList }) {
        console.log(listType, itemList);
        try {
            const response = await axios.post(this.addItemToList_api, { listType, itemList }).then((response) => {
                console.log(response.message);
                return response.data;
            }).catch((error) => {
                console.error(error);
                return error;
            });

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }

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
