import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = () => {
            // Clear local storage or any stored tokens
            localStorage.removeItem('captainToken');
            localStorage.removeItem('captainId');
            
            // Redirect to login page after logout
            setTimeout(() => {
                navigate('/captain-login');
            }, 2000);
        };

        handleLogout();
    }, [navigate]);

    return (
        <div >
            Captain Logout
        </div>
    );
};

export default CaptainLogout;