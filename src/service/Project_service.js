import axios from "axios";
import { PROJECT_API, DATASTORELIST_API, ID_TOKEN } from "../Constant.js";


export default class ProjectService {
    constructor() {
        this.idToken = ID_TOKEN;
        this.fetchAllProjects_api = PROJECT_API;
        this.favouritesProjects_api = `${PROJECT_API}/favorites`;
        this.fetchprojectby_id_api = `${PROJECT_API}`;
        this.fetchUserProjects_api = `${PROJECT_API}/userprojects`;
        this.deleteProject_api = `${PROJECT_API}/deleteproject`;
        this.createProject_api = `${PROJECT_API}/createproject`;
        this.uploadImage_api = `${PROJECT_API}/uploadimages`;
        this.getTotalUserProjects_views_api = `${PROJECT_API}/totalviews`;
        this.getTopRatingProjects_api = `${PROJECT_API}/toprating`;
        this.mostviewedProjects_api = `${PROJECT_API}/mostviewedproject`;
        this.addToFavourites_api = `${PROJECT_API}/addtofavourites`;
        this.getFinalYearProjects_api = `${PROJECT_API}/finalyearprojects`;
        this.addItemToList_api = `${DATASTORELIST_API}/additemtolist`;
        this.addmorefields_api = `${DATASTORELIST_API}/addmorefields`;
        this.updateViews_api = `${PROJECT_API}/updateviewscount`;
    }

    // write all funaction name from this file
    // updateViewsCount
    // addMoreFields
    // addItemToList
    // getFinalYearProjects
    // addToFavourites
    // getMostViewedProjects
    // getTotalUsersProjectViews
    // fetchAllProjects
    // fetchFavouritesProjects
    // fetchUserProjects
    // fetchProjectById
    // fetchUserProjects
    // deleteProject
    // getTopRatingProjects
    // createProject
    // uploadImages



    async updateViewsCount(id) {
        try {
            const response = await axios.get(`${this.updateViews_api}/${id}`).then((response) => {
                console.log(response);
                return response;
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

    async getFinalYearProjects() {
        try {
            const response = await axios.get(this.getFinalYearProjects_api);
            console.log(response.data);
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async addToFavourites(id) {
        try {
            console.log("id", id);
            const url = `${this.addToFavourites_api}/${id}`;
            console.log(url);
            const response = await axios.post(url, {}, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }
            })
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getMostViewedProjects() {
        try {
            const response = await axios.get(this.mostviewedProjects_api, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }
            });
            console.log(response.data);

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getTotalUsersProjectViews() {
        try {
            const response = await axios.get(this.getTotalUserProjects_views_api, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }
            });
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async fetchAllProjects() {
        try {
            console.log(this.fetchAllProjects_api);
            const response = await axios.get(this.fetchAllProjects_api);
            console.log(response.data);

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async fetchFavouritesProjects() {
        try {
            const response = await axios.get(this.favouritesProjects_api, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }
            });
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            } else {
                return response;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async fetchUserProjects() {
        try {
            const response = await axios.get(this.fetchUserProjects_api, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }
            });
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }


    async fetchProjectById(id) {
        try {
            const response = await axios.get(`${this.fetchprojectby_id_api}/${id}`);
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async fetchUserProjects() {
        try {
            const response = await axios.get(this.fetchUserProjects_api, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }
            });
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async deleteProject(id) {
        try {
            const response = await axios.delete(`${this.deleteProject_api}/${id}`, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }
            });
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getTopRatingProjects() {
        try {
            const response = await axios.get(this.getTopRatingProjects_api, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }

            });
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async createProject(data) {
        try {
            console.log("data", data);
            const response = await axios.post(this.createProject_api, data, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }
            });
            console.log(response.data);

            if (response.data.statusCode === 201) {
                return response.data;
            } else {
                return response;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async uploadImages(data) {
        try {
            const response = await axios.post(this.uploadImage_api, data);
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