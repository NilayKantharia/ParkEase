import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import BookATicket from './Components/BookATicket';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Registraion" element={<Registration />} />
        <Route path="/LoginPage"  element={<LoginPage />} />
        <Route path="/BookATicket" element={<BookATicket />} />
      </Routes>
    </Router>
  );
}

export default App;
