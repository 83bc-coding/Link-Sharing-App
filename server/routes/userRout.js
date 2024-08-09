const {createUser,loginUserCtrl} =require('../controller/userControl'); 
const express = require("express");
const router = express.Router();
const cors = require("cors");

// Use cors as middleware
router.use(cors());
 
router.options('/register', cors());
router.options('/login', cors());

router.post("/register", createUser);
router.post("/login", loginUserCtrl);

module.exports = router;