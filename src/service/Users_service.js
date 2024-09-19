import axios from 'axios';
import { BASE_URL, USER_API, EDITUSER_API, ID_TOKEN } from '../Constant.js';


export class UsersService {

    constructor() {
        this.idToken = ID_TOKEN;
        this.base_api = BASE_URL;
        this.user_api = USER_API;
        this.edit_user_api = EDITUSER_API;
        this.login_api = `${this.user_api}/login`;
        this.register_api = `${this.user_api}/register`;
        this.google_login_api = `${this.user_api}/googlesignin`;
        this.get_userdata_api = `${this.user_api}/getloggeduserdata`;
        this.usercollection_api = `${this.user_api}/usercollection`;
        this.sendverificationEmail = `${this.user_api}/sendverificationemail`;
        this.logout_api = `${this.user_api}/logout`;
        this.validate_token_api = `${this.user_api}/validate-token`;
        this.edit_user_api = `${this.edit_user_api}`;
        this.delete_user_api = `${this.edit_user_api}/deleteuser`;
    }

    async deleteUser() {
        try {
            console.log("delete user api : ", this.delete_user_api);
            const response = await axios.delete(this.delete_user_api, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }
            });
            console.log(response);
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async sendResetPasswordEmail(email) {
        try {
            console.log(email);
            const response = await axios.post(`${this.user_api}/resetpasswordemail`, { email });
            console.log(response);
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }


    async googleLogin(idToken) {
        try {
            console.log("google login function called", idToken);
            const response = await axios.post(this.google_login_api, { idToken });
            console.log(response);
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }


    async validateToken() {
        try {
            console.log(this.idToken);
            const response = await axios.get(this.validate_token_api, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
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
            const response = await axios.post(this.register_api, { email: email, password: password, fullName: fullname, userName: username });
            console.log(response);
            if (response.status === 201) {
                return response.data;
            } else if (response.status === 500) {
                console.log(response);
                return response;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getUserData() {
        try {
            console.log("getuserdata function called");
            const response = await axios.get(this.get_userdata_api, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }
            });
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
            const response = await axios.get(this.logout_api, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${this.idToken}`
                }
            });
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