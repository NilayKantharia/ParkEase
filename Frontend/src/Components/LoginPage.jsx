import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Container, Typography, Box, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!username) {
      setError('Please enter username.');
      return;
    }
    if (!password) {
      setError('Please enter password.');
      return;
    }

    setError('');

    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.data.success) {
        setSuccess('Login successful');
        setError('');
        // Redirect to another page or perform any other action upon successful login
        <NavLink to="/Home" activeClassName = "active" exact>Home</NavLink>
      } else {
        setError('Invalid username or password');
        setSuccess('');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Box mt={25} p={3} bgcolor="white" boxShadow={3} borderRadius={3}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Get Back to the Enjoyment Park
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}
          <form onSubmit={handleSubmit}>
            <Input
              fullWidth
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              variant="outlined"
              style={{ marginBottom: '1rem' }}
            />
            <Input
              fullWidth
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              variant="outlined"
              style={{ marginBottom: '1rem' }}
            />
            <Box mt={3}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
              <h3>Don't have an account? <NavLink to="/Registraion" activeClassName="active" exact>Sign up</NavLink></h3>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
}
