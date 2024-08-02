import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  const location = useLocation();

  if (!isLoggedIn) {
    // Redirect to the login page with a "from" state to return after login
    return <Navigate to="/LoginPage" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
