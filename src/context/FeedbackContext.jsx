import React, { createContext, useState, useEffect, useContext } from "react";
import FeedbackService from "../service/Feedback_service";
import showToast from "../utils/ShowToast";
import { UserserviceContext } from "./UserServiceContext.jsx";

const FeedbackContext = createContext();

const FeedbackContextProvider = ({ children }) => {
    const feedbackService = new FeedbackService();
    const { userData, isUserLoggedIn, fetchUserData } = useContext(UserserviceContext);
    const initialFeedback = {
        rating: 0,
        comments: ''
    }
    const [feedbacks, setFeedbacks] = useState(initialFeedback);
    const [projectFeedbacks, setProjectFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(feedbacks);


    const addFeedback = async (id) => {
        try {
            if (!isUserLoggedIn) {
                showToast("Please login to add feedback", 3000);
                return;

            }
            const response = await feedbackService.addFeedback(
                id,
                feedbacks.comments,
                feedbacks.rating,
            );
            console.log(response);
            if (response.statusCode === 200) {
                showToast(response.message, 3000);
                setFeedbacks(initialFeedback);
                fetchFeedback(id);
            } else {
                showToast(response.message, 3000);
                setError(response.message);
                setFeedbacks(initialFeedback);
            }
        } catch (error) {
            setError(error);
            setFeedbacks(initialFeedback);
        }
    }

    const fetchFeedback = async (id) => {
        try {
            const response = await feedbackService.getFeedback(id);
            console.log(response.data);
            if (response.statusCode === 200) {
                setProjectFeedbacks(response.data);
            }
        } catch (error) {
            setError(error);
        }
    }


    return (
        <FeedbackContext.Provider value={{ setFeedbacks, feedbacks, addFeedback, fetchFeedback, projectFeedbacks }} >
            {children}
        </FeedbackContext.Provider>
    )
}

export { FeedbackContext, FeedbackContextProvider }