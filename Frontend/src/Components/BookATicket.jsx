import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Container,
  Typography,
  Box
} from "@mui/material";

export default function BookATicket() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numAdults, setNumAdults] = useState("");
  const [numKids, setNumKids] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let pricePerTicket = 0;
    switch (ticketType) {
      case "silver":
        pricePerTicket = 500;
        break;
      case "gold":
        pricePerTicket = 800;
        break;
      case "platinum":
        pricePerTicket = 1000;
        break;
      default:
        pricePerTicket = 0;
        break;
    }
    setTotalCost((Number(numAdults) + Number(numKids)) * pricePerTicket);
  }, [numAdults, numKids, ticketType]);

  const validate = () => {
    const newErrors = {};

    if (!fullname) newErrors.fullname = "Full name is required";
    if (!/^[a-zA-Z\s]+$/.test(fullname)) newErrors.fullname = "Name should contain only letters.";
    if (!email) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email Format is not correct";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone number is of 10 digits"
    if (!numAdults) newErrors.numAdults = "Number of adults is required";
    if (!numKids) newErrors.numKids = "Number of kids is required";
    if (!ticketType) newErrors.ticketType = "Ticket type is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Handle form submission
    console.log({
      fullname,
      email,
      phone,
      numAdults,
      numKids,
      ticketType,
      totalCost
    });
  };

  return (
    <>
    <Navbar />
    <Container maxWidth="sm">
      <Box sx={{ mt: 3, mb: 4, boxShadow: 3, padding:3, borderRadius: 3}}>
        <Typography variant="h4" component="h2" gutterBottom>
          Book A Ticket
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            error={!!errors.fullname}
            helperText={errors.fullname}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone no"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Number of Adults"
            type="number"
            value={numAdults}
            onChange={(e) => setNumAdults(e.target.value)}
            inputProps={{ min: 0 }}
            error={!!errors.numAdults}
            helperText={errors.numAdults}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Number of Kids"
            type="number"
            value={numKids}
            onChange={(e) => setNumKids(e.target.value)}
            inputProps={{ min: 0 }}
            error={!!errors.numKids}
            helperText={errors.numKids}
          />
          <FormControl fullWidth margin="normal" error={!!errors.ticketType}>
            <InputLabel id="ticket-type-label">Type of Ticket</InputLabel>
            <Select
              labelId="ticket-type-label"
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
              label="Type of Ticket"
            >
              <MenuItem value="">
                <em>--Please choose a ticket type--</em>
              </MenuItem>
              <MenuItem value="silver">Silver</MenuItem>
              <MenuItem value="gold">Gold</MenuItem>
              <MenuItem value="platinum">Platinum</MenuItem>
            </Select>
            {errors.ticketType && (
              <Typography color="error">{errors.ticketType}</Typography>
            )}
          </FormControl>
          <Typography variant="h6" gutterBottom>
            Total Cost: {totalCost} Rs
          </Typography>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Pay
          </Button>
        </form>
      </Box>
    </Container>
    </>
  );
}
