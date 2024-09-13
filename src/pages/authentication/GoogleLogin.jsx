import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const history = useNavigate();

    const handleLogin = () => {
        window.location.href = 'http://localhost:8000/auth/google';
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log(code);

        if (code) {
            axios.post('http://localhost:8000/auth/google/callback', { code }).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    history('/profile');
                }
            });
        }
    }, [history]);

    return (
        <div className='flex  items-center justify-center'>
            <h1>Google OAuth 2.0 Login</h1>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default GoogleLogin;
