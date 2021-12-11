const express = require('express'); //import express
const router  = express.Router(); 
const userController = require('../controllers/user')

router.get('/user/profile', userController.getUserProfile)

// export der Router für die Wiederverwendung in der index.js
module.exports = router; 