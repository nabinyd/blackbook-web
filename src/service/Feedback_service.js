import axios from "axios";
import { FEEDBACK_API } from "../Constant.js";

export default class FeedbackService {
    constructor() {
        this.addFeedback_api = `${FEEDBACK_API}/addfeedback`;
        this.fetchProjectFeedback_api = `${FEEDBACK_API}/fetchprojectfeedbacks`;

    }

    async addFeedback(id, comment, rating) {
        try {
            const response = await axios.post(`${this.addFeedback_api}/${id}`, { comment, rating }, {
                withCredentials: true,
            });
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
            console.log("getFeedback", id);
            const response = await axios.get(`${this.fetchProjectFeedback_api}/${id}`);
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
