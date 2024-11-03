import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, requiredRole, children }) => {
    const userRole = localStorage.getItem('role'); // Ambil role dari localStorage

    // Cek apakah pengguna sudah login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Cek apakah role pengguna sesuai dengan requiredRole
    if (requiredRole && userRole !== requiredRole) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default ProtectedRoute;