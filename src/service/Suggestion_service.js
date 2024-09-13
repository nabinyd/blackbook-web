import { BASE_URL } from "../Constant.js";
import axios from "axios";


export default class SuggestionService {
    constructor() {
        this.base_api = `${BASE_URL}/api/v1`;
        this.suggestion_api = `${this.base_api}/suggestion`;
    }

    async addSugesstion(suggestion) {
        const { email, subject, message } = suggestion;
        console.log(email, subject, message);
        try {
            console.log(this.suggestion_api);
            const response = await axios.post(`${this.suggestion_api}/addsuggestion`, { "email": email, "subject": subject, "message": message });
            console.log(response);
            if (response.status === 201) {
                return response.data;
            } else {
                return response.status;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}
