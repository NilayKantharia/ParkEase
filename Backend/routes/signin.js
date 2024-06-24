const express = require('express');
const router = express.Router();
const connection=require('../connection');
const {handleform,handlenewdata}=require('../controllers/signin')

router.get("/",handleform);
router.post("/",handlenewdata)

module.exports = router;