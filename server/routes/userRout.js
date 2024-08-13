const {createUser,loginUserCtrl,updateUser,getUserId} =require('../controller/userControl'); 
const express = require("express");
const router = express.Router();
const cors = require("cors");

 router.use(cors());
 
router.options('/register', cors());
router.options('/login', cors());
router.options('/update', cors());
router.options('/user', cors());

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.post("/update", updateUser);
router.get("/user/:id", getUserId);

module.exports = router;