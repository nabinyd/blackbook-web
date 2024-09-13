import React, { useState } from 'react'
import SuggestionService from '../../service/Suggestion_service.js';
import showToast from '../../utils/ShowToast.js';





export default function Contact() {
    const [suggestion, setSuggestion] = useState({
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setSuggestion({ ...suggestion, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const suggestionService = new SuggestionService();

        // check if the email is valid and the subject is not empty and the message is not empty
        if (!suggestion.email || !suggestion.subject || !suggestion.message) {
            showToast('Please fill all the fields', 2000, 'error');
            return;
        }

        // validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(suggestion.email)) {
            showToast('Please enter a valid email', 2000);
            return;
        }
        try {
            const response = await suggestionService.addSugesstion(suggestion);
            if (response.statusCode === 201) {
                showToast('Thank you for your suggestion. We will get back to you soon', 3000);
                setSuggestion({
                    email: '',
                    subject: '',
                    message: ''
                })
            } else {
                showToast('Something went wrong. Please try again later', 3000, 'error');
            }
        } catch (error) {
            console.error(error);
            showToast("Something went wrong. Please try again later", 3000, 'error');
        }
    }


    return (
        <div className=' flex flex-col items-center'>
            <h1 className='mt-12 text-xl'>
                You can get in touch with us through below platforms.
            </h1>
            <p className='text-gray-400'>
                Our team will get back to you as soon as possible.
            </p>
            {/* Suggestion box */}
            <div className='border rounded-xl w-1/3 border-gray-700 mt-12'>
                <form className='flex flex-col items-center p-5'>
                    <p className='text-lg text-orange-300'>
                        Send us a message
                    </p>
                    <input type='email' placeholder='Email' className=' p-2 m-2 rounded bg-dark-jet w-full focus:outline-none '
                        value={suggestion.email}
                        onChange={handleChange}
                        name='email'
                        required
                    />

                    <input type='text' placeholder='Subject' className=' p-2 m-2 rounded bg-dark-jet w-full focus:outline-none'
                        value={suggestion.subject}
                        onChange={handleChange}
                        name='subject'
                        required
                    />

                    <textarea placeholder='Message' className=' p-2 m-2 rounded bg-dark-jet w-full focus:outline-none'
                        value={suggestion.message}
                        onChange={handleChange}
                        name='message'
                        required
                    />

                    <button className='bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-md px-5 py-2 focus:outline-none mt-2 w-fit
                    ' onClick={handleSubmit}>Submit</button>
                </form>
            </div>

            <div className='flex justify-center mt-5'>
                <a href='https://www.facebook.com/profile.php?id=61563365167954' target='_blank' rel='noreferrer'>
                    <img src='https://img.icons8.com/color/48/000000/facebook.png' alt='facebook' className='w-10 h-10 mr-3' />
                </a>
                <a href='https://www.instagram.com/blackbook_project_official/' target='_blank' rel='noreferrer'>
                    <img src='https://img.icons8.com/color/48/000000/instagram-new.png' alt='instagram' className='w-10 h-10 mr-3' />
                </a>
                <a href='https://x.com/blackbook_2024' target='_blank' rel='noreferrer' >
                    <img src='https://img.icons8.com/color/48/twitterx--v1.png' alt='twitterx--v1' className='w-10 h-10 mr-3 text-white' />
                </a>
                {/* <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                    <img src='https://img.icons8.com/color/48/000000/linkedin.png' alt='linkedin' className='w-10 h-10 mr-3' />
                </a> */}
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank' rel='noreferrer'>
                    <img src='https://img.icons8.com/color/48/000000/gmail.png' alt='gmail' className='w-10 h-10 mr-3' />
                </a>
            </div>
        </div>
    )
}