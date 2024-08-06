import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const uid = Cookies.get('uid'); // Replace 'uid' with your actual cookie name

  if (!uid) {
    // Redirect to the login page with a "from" state to return after login
    return <Navigate to="/LoginPage" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
