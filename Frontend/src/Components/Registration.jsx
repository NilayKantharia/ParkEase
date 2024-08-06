import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
// import Navbar from './Navbar';

export default function Registration() {
  const [fullname, setFullname] = useState('');
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [role, setRole] = useState('user'); // Default role

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [fullnameError, setFullnameError] = useState('');
  // const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [formError, setFormError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFullnameError('');
    // setUsernameError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setEmailError('');
    setPhoneError('');
    setFormError('');

    let hasError = false;

    if (!fullname) {
      setFullnameError('Please enter your full name.');
      hasError = true;
    } else if (!/^[a-zA-Z\s]+$/.test(fullname)) {
      setFullnameError('Name should contain only letters.');
      hasError = true;
    }

    // const validateUsername = (username) => {
    //   if (username.length < 3 || username.length > 15) {
    //     return 'Username must be between 3 and 15 characters long';
    //   }
    //   if (!/^[a-zA-Z0-9._]+$/.test(username)) {
    //     return 'Username can only contain letters, numbers, underscores, and periods';
    //   }
    //   if (!/^\S*$/.test(username)) {
    //     return 'Username cannot contain spaces';
    //   }
    //   if (/(.)\1{2,}/.test(username)) {
    //     return 'Username cannot contain sequential repeated characters';
    //   }
    //   return '';
    // };

    // const usernameValidationError = validateUsername(username);
    // if (usernameValidationError) {
    //   setUsernameError(usernameValidationError);
    //   hasError = true;
    // }

    if (!password) {
      setPasswordError('Please enter a password.');
      hasError = true;
    }
    if (!confirmPassword) {
      setConfirmPasswordError('Please enter the confirm password');
      hasError = true;
    } else if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      setConfirmPasswordError('Passwords do not match.');
      hasError = true;
    }

    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    if (!email) {
      setEmailError('Please enter your email address.');
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      hasError = true;
    }

    const isValidPhone = (phone) => {
      return /^\d{10}$/.test(phone);
    };

    if (!phone) {
      setPhoneError('Please enter your phone number.');
      hasError = true;
    } else if (!isValidPhone(phone)) {
      setPhoneError('Please enter a valid phone number.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const userData = {
      fullname,
      password,
      email,
      phoneNO: phone,
    };

    try {
      const response = await axios.post('http://localhost:8000/signup', userData);
      console.log(response.data);
      const from = location.state?.from?.pathname || '/';
      navigate(from);
    } catch (error) {
      console.error('Registration failed:', error);
      setFormError('Registration failed. Please try again.');
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="card shadow-lg p-4">
              <h4 className="card-title mb-3">Create an Account</h4>
              <p className="card-text">Create an account and start exploring the amusement park</p>
              {formError && <div className="alert alert-danger">{formError}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className={`form-control ${fullnameError ? 'is-invalid' : ''}`}
                    id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  {fullnameError && <div className="invalid-feedback">{fullnameError}</div>}
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {usernameError && <div className="invalid-feedback">{usernameError}</div>}
                </div> */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                  />
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {phoneError && <div className="invalid-feedback">{phoneError}</div>}
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="role" className="form-label">Role</label>
                  <select
                    className="form-control"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="hr">HR</option>
                    <option value="stallExecutive">Stall Executive</option>
                  </select>
                </div> */}
                <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>
                <p className="text-center">
                  Already have an account? <NavLink to="/LoginPage" className="text-decoration-none text-primary">Log in</NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
