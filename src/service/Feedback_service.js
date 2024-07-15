import axios from "axios";
import { PROJECT_API } from "../Constant.js";

export default class FeedbackService {
    constructor() {
        this.addFeedback_api = `${PROJECT_API}/addfeedback`;
        this.getFeedback_api = `${PROJECT_API}/projectfeedbacks`;

    }

    async addFeedback(id, comment, rating) {
        try {
            const response = await axios.post(`${this.addFeedback_api}/${id}`, { comment, rating });
            console.log(response);
            if (response.status === 201) {
                return response.data;
            } 
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getFeedback(id) {
        try {
            const response = await axios.get(`${this.getFeedback_api}/${id}`);
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