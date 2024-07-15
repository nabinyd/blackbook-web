import axios from 'axios';
import { BASE_URL, USER_API } from '../Constant.js';


export class UsersService {

    constructor() {
        this.base_api = BASE_URL;
        this.user_api = USER_API;
        this.login_api = `${this.user_api}/login`;
        this.register_api = `${this.user_api}/register`;
        this.get_userdata_api = `${this.user_api}/getloggeduserdata`;
        this.usercollection_api = `${this.user_api}/usercollection`;
        this.sendverificationEmail = `${this.user_api}/sendverificationemail`;
        this.logout_api = `${this.user_api}/logout`;
        this.validate_token_api = `${this.user_api}/validate-token`;
    }


    async validateToken(token) {
        try {
            const response = await axios.get(this.validate_token_api, {
                headers: {
                    Authorization: token,
                }
            });
            console.log("validate token response", response);
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }


    async home() {
        try {
            const response = await axios.get(`${this.base_api}`);
            console.log(response.data);

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async login({ email, password }) {
        try {
            console.log(email, password);
            const response = await axios.post(this.login_api, {
                "email": email,
                "password": password
            });
            console.log(` login response: ${response}`);
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            } else if (response.status === 500) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async register({ email, password, fullname, username }) {
        try {
            const response = await axios.post(this.register_api, { email, password, fullname, username });
            console.log(response);
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getUserData() {
        try {
            const response = await axios.get(this.get_userdata_api);
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getUserCollection() {
        try {
            const response = await axios.post(this.usercollection_api);
            if (response.statusCode === 200) {
                return response.message;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }


    async logout() {
        try {
            const response = await axios.get(this.logout_api);
            console.log(response);
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }


}
const usersService = new UsersService();
export default usersService;