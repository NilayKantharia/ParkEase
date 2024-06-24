const express = require('express');
const router = express.Router();
const connection=require('../connection');
const { route } = require('./signin');
const {handleloginform,handlevalidation} = require('../controllers/login');

router.get('/',handleloginform)
router.post('/',handlevalidation)

module.exports = router;