import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const SuccessfulAlert = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={25} p={3} bgcolor="white" boxShadow={3} borderRadius={3}>
        <Typography variant="h4" gutterBottom>
          Registration Successful
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Congratulations! Your registration was successful.
        </Typography>
        <NavLink to="/loginPage" style={{ textDecoration: 'none', color: '#1976d2' }}>
          <Button variant="contained" color="primary">
            Go to Login
          </Button>
        </NavLink>
      </Box>
    </Container>
  );
}

export default SuccessfulAlert;
