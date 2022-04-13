import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const isLoggedIn = localStorage.getItem('token');
    

    return isLoggedIn?(
        <div>
            <Outlet />
        </div>
    ): (
        <Navigate to="/login" replace />
    )
}

export default PrivateRoutes