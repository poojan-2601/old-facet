import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const isLoggedIn = useSelector(state => state.loginReducer);
    
    return isLoggedIn?(
        <div>
            <Outlet />
        </div>
    ): (
        <Navigate to="/login" replace />
    )
}

export default PrivateRoutes