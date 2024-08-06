import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import BookATicket from './Components/BookATicket';
import BookOrder from './Components/BookOrder';
import MyOrders from './Components/MyOrders';
import Cart from './Components/cart';
import ProtectedRoute from './Components/ProtectedRoute';
import HrDashboard from './Components/HrDashboard';
import EmployeeDetails from './Components/EmployeeDetails';
import AddNewEmployee from './Components/AddNewEmployee';
import ViewEmployee from './Components/ViewEmployee';
import TicketHistory from './Components/TicketHistory'; // Import the TicketHistory component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('user'); // Default role is 'user'

  const handleLogin = (userRole) => {
    setIsLoggedIn(true);
    setRole(userRole);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole('user'); // Reset to default role on logout
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Home />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/LoginPage" element={<LoginPage onLogin={handleLogin} />} />
        
        {/* Protected Routes */}
        <Route
          path="/BookATicket"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <BookATicket />
            </ProtectedRoute>
          }
        />
        <Route
          path="/BookOrder"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <BookOrder />
            </ProtectedRoute>
          }
        />
        
        {/* Conditional Route Rendering based on Role */}
        <Route
          path="/hrDashboard"
          element={
            isLoggedIn && role === 'hr' ? <HrDashboard /> : <Navigate to="/" />
          }
        />
        
        {/* Other Routes */}
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/employee-details" element={<EmployeeDetails />} />
        <Route path="/add-new-employee" element={<AddNewEmployee />} />
        <Route path="/view-employee/:id" element={<ViewEmployee />} />
        <Route path="/ticket-history" element={<TicketHistory />} /> {/* Add this route */}

        {/* Redirect all other routes to Home */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
