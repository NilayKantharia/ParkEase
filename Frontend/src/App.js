import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import BookATicket from './Components/BookATicket';
import BookOrder from './Components/BookOrder';
import MyOrders from './Components/MyOrders';
import Cart from './Components/cart';
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/BookATicket" element={<BookATicket />} />
        <Route path="/BookOrder" element={<BookOrder />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
