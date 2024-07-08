import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

export default function Registration() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [fullnameError, setFullnameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFullnameError('');
    setUsernameError('');
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

    const validateUsername = (username) => {
      if (username.length < 3 || username.length > 15) {
        return 'Username must be between 3 and 15 characters long';
      }
      if (!/^[a-zA-Z0-9._]+$/.test(username)) {
        return 'Username can only contain letters, numbers, underscores, and periods';
      }
      if (!/^\S*$/.test(username)) {
        return 'Username cannot contain spaces';
      }
      if (/(.)\1{2,}/.test(username)) {
        return 'Username cannot contain sequential repeated characters';
      }
      return '';
    };

    const usernameValidationError = validateUsername(username);
    if (usernameValidationError) {
      setUsernameError(usernameValidationError);
      hasError = true;
    }

    if (!password) {
      setPasswordError('Please enter a password.');
      hasError = true;
    }if (!confirmPassword){
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
      username: username,
      password: password,
      email: email,
      phoneNO: phone,
    };

    try {
      const response = await axios.post('http://localhost:8000/signup', userData);
      console.log(response.data);
    } catch (error) {
      console.error('Registration failed:', error);
      setFormError('Registration failed. Please try again.'); 
    }
  };

  // const handleReset = () => {
  //   setFullname('');
  //   setUsername('');
  //   setPassword('');
  //   setConfirmPassword('');
  //   setEmail('');
  //   setPhone('');
  //   setFullnameError('');
  //   setUsernameError('');
  //   setPasswordError('');
  //   setConfirmPasswordError('');
  //   setEmailError('');
  //   setPhoneError('');
  //   setFormError('');
  // };

  return (
    <>
    <Navbar />
    <Container  sx={{ width: '520px', height: '720px', mt: 2, p: 1, boxShadow: 3, borderRadius: 3 }}>
      <Box sx={{ textAlign: 'left', mt: 2, mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Create an Account
        </Typography>
        <Typography variant="subtitle1.5" gutterBottom>
          Create an account and start exploring the amusement park
        </Typography>
        {formError && <Alert severity="error">{formError}</Alert>}
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          margin="normal"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          error={!!fullnameError}
          helperText={fullnameError}
          // sx={{ mt : 2 }}
          
        />
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!usernameError}
          helperText={usernameError}
          // sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
          // sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={!!confirmPasswordError}
          helperText={confirmPasswordError}
          // sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Email Address"
          type="email"
          variant="outlined"
          placeholder="example@gmail.com"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
          // sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={!!phoneError}
          helperText={phoneError}
          // sx={{ mb: 2 }}
        />
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
            Sign Up
          </Button>
          <Typography variant="body2" sx={{ textAlign: 'center', mb: 4 }}>
            <h3>
            Already have an account? <NavLink to="/LoginPage" style={{ textDecoration: 'none', color: '#1976d2' }}>Log in</NavLink></h3>
          </Typography>
          {/* <Button type="button" variant="contained" color="secondary" fullWidth onClick={handleReset}>
            Reset
          </Button> */}
        </Box>
      </form>
    </Container>
    </>
  );
}
