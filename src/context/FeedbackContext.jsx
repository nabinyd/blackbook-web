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
    const [feedbackLoading, setFeedbackLoading] = useState(false);
    const [error, setError] = useState(null);


    const addFeedback = async (id) => {
        try {
            if (!isUserLoggedIn) {
                showToast("Please login to add feedback", 3000, "error");
                return;
            }
            const response = await feedbackService.addFeedback(
                id,
                feedbacks.comments,
                feedbacks.rating,
            );
            console.log(response);
            if (response.statusCode === 201) {
                showToast(response.message, 3000, "success");
                setFeedbacks(initialFeedback);
                fetchFeedback(id);
            } else {
                showToast(response.message, 3000, "error");
                setError(response.message);
                setFeedbacks(initialFeedback);
            }c
        } catch (error) {
            console.log("addFeedback error", error);
            setError(error);
            setFeedbacks(initialFeedback);
        }
    }

    const fetchFeedback = async (id) => {
        try {
            setFeedbackLoading(true);
            const response = await feedbackService.getFeedback(id);
            console.log(response.data);
            setFeedbackLoading(false);
            if (response.statusCode === 200) {
                setProjectFeedbacks(response.data);
            }
        } catch (error) {
            console.log("fetchFeedback error", error);
            setFeedbackLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchFeedback("691b2dc3-7a4e-4f00-997f-1926ce7eb2ef");
    }, [])


    return (
        <FeedbackContext.Provider value={{ setFeedbacks, feedbacks, addFeedback, fetchFeedback, projectFeedbacks, feedbackLoading }} >
            {children}
        </FeedbackContext.Provider>
    )
}

export { FeedbackContext, FeedbackContextProvider }