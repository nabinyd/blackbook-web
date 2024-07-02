import axios from 'axios';
import { BASE_URL, USER_API } from '../Constant.js';


export class UsersService {
    constructor() {
        this.base_api = BASE_URL;
        this.user_api = USER_API;
        this.login_api = `${this.user_api}/login`;
        this.register_api = `${this.user_api}/register`;
        this.get_user_api = `${this.user_api}/getloggeduserdata`;
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
            console.log(response);
            // if (response.status === 200) {
            //     console.log(response.data);
            //     return response.data;
            // }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async register({ email, password, fullname, username }) {
        try {
            const response = await axios.post(this.register_api, { email, password, fullname, username });
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
            const response = await axios.get(this.user_api);
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