import React, { useState, useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';

import '../css/StarRating.css';

export default function StarRating({ showRating, isDisplayOnly = false }) {

    // const { rating: contextRating, setFeedback , feedbacks} = useContext(FeedbackContext);
    const { setFeedbacks, feedbacks } = useContext(FeedbackContext);
    const [hover, setHover] = useState(0);

    const rating = isDisplayOnly ? showRating : feedbacks.rating;

    console.log(feedbacks.rating);
    console.log(feedbacks.comments);



    return (
        <div className='flex items-center justify-start'>
            {[...Array(5)].map((star, i) => {
                i += 1;
                return (
                    <button
                        type='button'
                        key={i}
                        className={i <= (hover || rating) ? 'on' : 'off'}
                        onClick={!isDisplayOnly ? () => setFeedbacks((prevestore) => {
                            return { ...prevestore, rating: i }
                        }) : null}
                        onMouseEnter={!isDisplayOnly ? () => setHover(i) : null}
                        onMouseLeave={!isDisplayOnly ? () => setHover(rating) : null}
                        disabled={isDisplayOnly}
                    >
                        <span className='star'>&#9733;</span>
                    </button>
                );
            })}
            <p className='ml-2 text-sm'>{rating}</p>
        </div>

    )
}
