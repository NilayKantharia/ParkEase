const express = require('express');
const router = express.Router();
const {handleUserSignupForm,handleUserSignup,handleUserLoginForm,handleUserLogin, getAllUsers} = require('../controllers/user');

//Signup route
router.get("/signup",handleUserSignupForm);
router.post("/signup",handleUserSignup);

//Login route
router.get('/login',handleUserLoginForm);
router.post('/login',handleUserLogin);

router.get('/users', getAllUsers)

module.exports = router;